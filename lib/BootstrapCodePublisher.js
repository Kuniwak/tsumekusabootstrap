// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for code publishers for the bootstrap.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;

var tsumekusahtml = require('tsumekusahtml');
var HtmlCodePublisher = tsumekusahtml.CODE.constructor;



/**
 * A class for code publishers for the bootstrap.
 * @constructor
 * @extends {module:tsumekusahtml/lib/HtmlCodePublisher}
 * @exports lib/BootstrapCodePublisher
 */
var BootstrapCodePublisher = function() {
  HtmlCodePublisher.call(this);
};
util.inherits(BootstrapCodePublisher, HtmlCodePublisher);
util.addSingletonGetter(BootstrapCodePublisher);


/**
 * CSS class selector for HTML code elements with the bootstrap.
 * @const
 * @type {string}
 */
BootstrapCodePublisher.CLASS_NAME = 'prettyprint linenums';


/** @override */
BootstrapCodePublisher.prototype.createCodeDom = function(element) {
  var code = HtmlCodePublisher.prototype.createCodeDom(element);
  code.setAttribute('class', BootstrapCodePublisher.CLASS_NAME);

  return code;
};


// Export the constructor
module.exports = BootstrapCodePublisher;
