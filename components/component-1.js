var serveStatic = require('serve-static');
var path = require('path');
module.exports = Component1;

function Component1(){

}

Component1.prototype.stop = function($happn, cb){
  clearInterval(this.__interval);
  cb();
}

Component1.prototype.start = function($happn, cb){
  this.__interval = setInterval(()=>{
    //console.log('emitting 1:::', Date.now());
    $happn.emit('component1-event', Date.now());
  }, 1000);

  cb();
}

Component1.prototype.serve = serveStatic(path.resolve(__dirname, '../content/component-1/index.htm'));
