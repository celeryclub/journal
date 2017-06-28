var minimist = require('minimist'),
    options = minimist(process.argv.slice(2), {});

var environment = options.environment || options.e || 'development';

var lorry = require('lorry')(environment);

lorry.installTask('build');
lorry.installTask('server');
lorry.installTask('deploy');

lorry.setDefaultTask('server');
