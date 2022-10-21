const path = require('path');
const directory = require('module-alias');

function from(location) {
   return path.resolve(__dirname, '../../src', `./${location}`);
}

directory.addAliases({
   '@models': from('models'),
   '@routes': from('routes'),
   '@services': from('services'),
   '@databases': from('databases'),
   '@controllers': from('controllers'),
   '@middlewares': from('middlewares'),
});

module.exports = directory;
