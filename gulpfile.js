var minimist = require('minimist'),
    options = minimist(process.argv.slice(2), {});

var environment = options.environment || options.e || 'development';

var lorry = require('lorry')(environment);

lorry.install('build');
lorry.install('server');
lorry.install('deploy');

lorry.setDefault('server');
