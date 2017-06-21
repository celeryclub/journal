'use strict';

var path = require('path'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    streamqueue = require('streamqueue'),
    tinylr = require('tiny-lr'),
    through2 = require('through2');

var _package = require(path.join(__dirname, 'package.json')),
    manifest = require(path.join(__dirname, 'manifest.json'));

var environmentName = process.env.NODE_ENV || 'development';

try {
  var environment = require(path.join(__dirname, 'environments', environmentName + '.js'));
}
catch( e ) {
  console.log( 'Unable to load environment config for ' + environmentName );
  process.exit();
}

var assetBasename = _package.name + '-' + _package.version;

var queueStreams = function(sources) {
  var source,
      stream,
      streams = streamqueue({ objectMode: true });

  for (var i = 0; i < sources.length; i++) {
    source = sources[i];
    stream = gulp.src(source.files, { base: source.base });

    streams.queue(stream);
  }

  return streams.done();
};

var watchList = function(sources) {
  if (sources.length === 0) return [];

  var list = sources.map(function(source) {
    return source.files;
  });

  return list;
};

var liveReload = function() {
  return through2.obj(function(file, enc, callback) {
    tinylr.changed(file.path);
    callback(null, file);
  });
};

var stylesheets = function() {
  console.log('Building stylesheets...');

  if (manifest.stylesheets.length > 0) {
    var stream =
      queueStreams(manifest.stylesheets).
      pipe(sass().on('error', sass.logError)).
      pipe(concat(assetBasename + '.css'));

    if (environmentName === 'production') {
      stream = stream.pipe(cleanCss());
    }

    return stream.pipe(gulp.dest('public'));
  }
};

var javascripts = function() {
  console.log('Building javascripts...');

  if (manifest.javascripts.length > 0) {
    var stream =
      queueStreams(manifest.javascripts).
      pipe(concat(assetBasename + '.js'));

    if (environmentName === 'production') {
      stream = stream.pipe(uglify({ mangle: false }));
    }

    return stream.pipe(gulp.dest('public'));
  }
};

var templates = function() {
  console.log('Building templates...');

  if (manifest.templates.length > 0) {
    return queueStreams(manifest.templates).
      pipe(gulp.dest('public'));
  }
};

var watch = function() {
  console.log('Watching for changes...');

  gulp.watch(
    'index.html',
    function() {
      console.log('Refreshing index...');
      gulp.src('index.html').pipe(liveReload());
    }
  );

  gulp.watch(
    watchList(manifest.stylesheets),
    function() {
      stylesheets().pipe(liveReload());
    }
  );

  gulp.watch(
    watchList(manifest.javascripts),
    function() {
      javascripts().pipe(liveReload());
    }
  );

  gulp.watch(
    watchList(manifest.templates),
    function() {
      templates().pipe(liveReload());
    }
  );

  var lr = tinylr();
  lr.listen(35729);
  console.log('LiveReload started on port 35729');

  process.on('SIGINT', function() {
    lr.close();
    process.exit();
  });
};

module.exports = {
  assets: function() {
    stylesheets();
    javascripts();
    templates();

    if (environmentName !== 'production') {
      watch();
    }
  },
  locals: {
    metaTags: environment,
    stylesheetUrl: '/' + assetBasename + '.css',
    javascriptUrl: '/' + assetBasename + '.js'
  }
};
