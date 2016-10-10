var Emitter = require('events').EventEmitter;
var util = require('util');
var path = require('path');
var fs = require('fs');
var View = require('./view');
const {dialog} = require('electron').remote

var App = function() {
    this.on('view-selected', function( viewName) {
        var view = new View(viewName);
        this.emit('view-rendered', view.toHtml);
    });
    this.on('onBrowse', function(initiator) {
      var selectedDir = dialog.showOpenDialog({properties: ['openDirectory']});
      this.emit(initiator + 'browseComplete', selectedDir);
    })
};

util.inherits(App, Emitter);
module.exports = new App();
