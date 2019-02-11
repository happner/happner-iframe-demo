var serveStatic = require('serve-static');
var Happner = require('happner-2');

var config = {
  modules: {
    'container': {
      path: __dirname + '/components/container'
    },
    'component-1': {
      path: __dirname + '/components/component-1'
    },
    'component-2': {
      path: __dirname + '/components/component-2'
    }
  },
  components: {
    'container': {
      web: {
        routes: {
          'ui':'serve'
        }
      }
    },
    'component-1': {
      startMethod:'start',
      stopMethod:'stop',
      web: {
        routes: {
          'ui':'serve'
        }
      }
    },
    'component-2': {
      startMethod:'start',
      stopMethod:'stop',
      web: {
        routes: {
          'ui':'serve'
        }
      }
    }
  }
}

Happner.create(config, function(e, instance){
  console.log('instance up! Navigate to http://localhost:55000/container/ui');
});
