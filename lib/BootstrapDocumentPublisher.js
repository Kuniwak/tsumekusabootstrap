// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for document element publishers for the bootstrap.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;

var tsumekusahtml = require('tsumekusahtml');
var HtmlElement = tsumekusahtml.util.HtmlElement;
var HtmlDocumentPublisher = tsumekusahtml.DOCUMENT.constructor;



/**
 * A class for document element publisher for the bootstrap.
 * @constructor
 * @extends {module:tsumekusahtml/lib/HtmlDocumentPublisher}
 * @exports lib/BootstrapDocumentPublisher
 */
var BootstrapDocumentPublisher = function() {
  HtmlDocumentPublisher.call(this);
};
util.inherits(BootstrapDocumentPublisher, HtmlDocumentPublisher);
util.addSingletonGetter(BootstrapDocumentPublisher);


/**
 * Whether the document layout is fluid.
 * @const
 * @type {boolean}
 */
BootstrapDocumentPublisher.FLUID = false;


/**
 * Default file path of bootstrap CSS.
 * @see http://netdna.bootstrapcdn.com/
 * @const
 * @type {string}
 */
BootstrapDocumentPublisher.BOOTSTRAP_CSS_PATH =
    'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/' +
    'bootstrap.min.css';


/**
 * Default file path of bootstrap CSS.
 * @see http://netdna.bootstrapcdn.com/
 * @const
 * @type {string}
 */
BootstrapDocumentPublisher.BOOTSTRAP_JS_PATH =
    'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/' +
    'bootstrap.min.js';


/**
 * Directory path of bootstrap.
 * @const
 * @type {string}
 */
BootstrapDocumentPublisher.PRETTIFY_CSS_PATH =
    'http://twitter.github.io/bootstrap/assets/js/google-code-prettify/' +
    'prettify.css';


/**
 * Directory path of bootstrap.
 * @const
 * @type {string}
 */
BootstrapDocumentPublisher.PRETTIFY_JS_PATH =
    'https://google-code-prettify.googlecode.com/svn/loader/prettify.js';


/**
 * File path of bootstrap CSS.  You can change a bootstrap theme by setting an
 * URL to this property (or you can also use a local file by setting the file
 * URL).
 * In default, use {@link BootstrapDocumentPublisher.BOOTSTRAP_CSS_PATH}.
 * @type {string}
 * @see http://www.bootstrapcdn.com/index.html#tab_bootswatch
 */
BootstrapDocumentPublisher.bootstrapCssPath = BootstrapDocumentPublisher.
    BOOTSTRAP_CSS_PATH;


/**
 * File path of bootstrap script.  You can use a local file by setting an file
 * URL to this property.
 * In default, use {@link BootstrapDocumentPublisher.BOOTSTRAP_JS_PATH}.
 * @type {string}
 * @see http://www.bootstrapcdn.com/index.html#tab_bootswatch
 */
BootstrapDocumentPublisher.bootstrapJsPath = BootstrapDocumentPublisher.
    BOOTSTRAP_JS_PATH;


/**
 * File path of bootstrap CSS.  You can use a local file by setting an file URL
 * to this property.
 * In default, use {@link BootstrapDocumentPublisher.PRETTIFY_CSS_PATH}.
 * @type {string}
 */
BootstrapDocumentPublisher.prettifyCssPath = BootstrapDocumentPublisher.
    PRETTIFY_CSS_PATH;


/**
 * File path of bootstrap CSS.  You can use a local file by setting an URL to
 * this property.
 * In default, use {@link BootstrapDocumentPublisher.PRETTIFY_JS_PATH}.
 * @type {string}
 */
BootstrapDocumentPublisher.prettifyJsPath = BootstrapDocumentPublisher.
    PRETTIFY_JS_PATH;


/** @override */
BootstrapDocumentPublisher.prototype.createBodyDom = function(element,
    contents) {
  var newContents = new HtmlElement('div', false, contents);
  var className = BootstrapDocumentPublisher.FLUID ? 'container-fluid' :
      'container';

  newContents.setAttribute('class', className);
  return HtmlDocumentPublisher.prototype.createBodyDom.call(this, element,
      newContents.toString());
};


/** @override */
BootstrapDocumentPublisher.prototype.createCssDoms = function(element) {
  var cssArr = HtmlDocumentPublisher.prototype.createCssDoms.call(this,
      element);

  var bootstrapCss = new HtmlElement('link', true)
      .setAttribute('href', BootstrapDocumentPublisher.bootstrapCssPath)
      .setAttribute('rel', 'stylesheet');

  var prettifyCss = new HtmlElement('link', true)
      .setAttribute('href', BootstrapDocumentPublisher.prettifyCssPath)
      .setAttribute('rel', 'stylesheet');

  cssArr.push(bootstrapCss, prettifyCss);
  return cssArr;
};


/** @override */
BootstrapDocumentPublisher.prototype.createScriptDoms = function(element) {
  var jsArr = HtmlDocumentPublisher.prototype.createScriptDoms.call(this,
      element);

  var bootstrapJs = new HtmlElement('script')
      .setAttribute('src', BootstrapDocumentPublisher.bootstrapJsPath)
      .setAttribute('type', 'text/javascript');

  var prettifyJs = new HtmlElement('script')
      .setAttribute('src', BootstrapDocumentPublisher.prettifyJsPath)
      .setAttribute('type', 'text/javascript');

  var runPrettify = new HtmlElement('script', false, 'prettyPrint();')
      .setAttribute('type', 'text/javascript');

  jsArr.push(bootstrapJs, prettifyJs, runPrettify);
  return jsArr;
};


// Export the constructor
module.exports = BootstrapDocumentPublisher;
