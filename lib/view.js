var fs = require('fs');
var path = require('path');
var Jade = require('jade');

var View = function( viewName) {
    var templatePath = path.join(__dirname, "../views", viewName + ".jade");
    var source = fs.readFileSync( templatePath, "utf-8");
    var template = Jade.compile( source);

    this.toHtml = function( data) {
        return template(data);
    };
};

module.exports = View;
