var environment = process.env.NODE_ENV || process.argv[4] || 'staging';

var lorry = require('lorry')(environment);

lorry.installTask('build');
lorry.installTask('server');
lorry.installTask('deploy');
