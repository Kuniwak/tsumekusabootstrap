// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib'
var BootstrapPublishers = require(basePath);

var tsumekusa = require('tsumekusa');
var Code = tsumekusa.Code;
tsumekusa.registerPublishers(BootstrapPublishers);


tsumekusa.Element.prototype.getReference = function() {
  return new tsumekusa.Reference(this.getReferenceId(), 'file_name.html');
};


module.exports = {
  'Publish a code element': function(test) {
    var code = new Code([
      'var foobar = function() {',
      '  alert("Foobar");',
      '};',
    ].join('\n'));

    var CORRECT = [
      '<pre class="prettyprint linenums">var foobar = function() {',
      '  alert("Foobar");',
      '};</pre>'
    ].join('\n');

    test.equal(code.publish(), CORRECT);
    test.done();
  },
  'Publish a code element with a reference ID': function(test) {
    var code = new Code([
      'var foobar = function() {',
      '  alert("Foobar");',
      '};',
    ].join('\n'));

    code.setReferenceId('my-code');

    var CORRECT = [
      '<pre id="my-code" class="prettyprint linenums">var foobar = function() {',
      '  alert("Foobar");',
      '};</pre>'
    ].join('\n');

    test.equal(code.publish(), CORRECT);
    test.done();
  }
};
