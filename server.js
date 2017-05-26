'use strict';

var path = require('path'),
    express = require('express'),
    ejs = require('ejs'),
    build = require('./build');

var app = express();

build.assets();
build.watch();

app.set('port', 9000);
app.set('views', __dirname);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(
  express.static('public', {
    setHeaders: function(response) {
      response.set('Cache-Control', 'public, no-transform, max-age=86400');
    }
  })
);

app.get('*', function(request, response) {
  response.set('Cache-Control', 'no-cache');
  response.render('index.html', build.locals);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
