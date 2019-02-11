var serveStatic = require('serve-static');
var path = require('path');
module.exports = Container;

function Container(){

}

Container.prototype.serve = serveStatic(path.resolve(__dirname, '../content/container.htm'));
