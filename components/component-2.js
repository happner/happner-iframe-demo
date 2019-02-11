var serveStatic = require('serve-static');
var path = require('path');
module.exports = Component2;

function Component2(){}

Component2.prototype.stop = function($happn, cb){
  clearInterval(this.__interval);
  cb();
}

Component2.prototype.start = function($happn, cb){
  this.__interval = setInterval(()=>{
    //console.log('emitting 2:::', Date.now());
    $happn.emit('component2-event', Date.now());
  }, 2000);

  cb();
}

Component2.prototype.serve = serveStatic(path.resolve(__dirname, '../content/component-2/index.htm'));
