const options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
options.config = { name: 'Total.js', 'directory-temp': '' };

require('total.js').http('release');
ON('ready', () => F.install('package', 'https://cdn.totaljs.com/dashboardmaker.package'));