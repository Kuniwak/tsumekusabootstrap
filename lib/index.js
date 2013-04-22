// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../lib';
var defProp = Object.defineProperty;


var tsumekusahtml = require('tsumekusahtml');


/**
 * Element publisher map.
 * @enum {function(new:tsumekusa.publishing.IElementPublisher)}
 * @exports tsumekusahtml
 */
module.exports = {


  /**
   * An alias for bootstrap code publishers.
   * @type {module:lib/BootstrapCodePublisher}
   */
  get CODE() {
    defProp(this, 'CODE', {
      value: require(basePath + '/BootstrapCodePublisher').getInstance()
    });
    return this.CODE;
  },


  /**
   * An alias for bootstrap container publishers.
   * @type {module:tsumekusahtml/lib/HtmlContainerPublisher}
   */
  get CONTAINER() {
    defProp(this, 'CONTAINER', {
      value: tsumekusahtml.CONTAINER
    });
    return this.CONTAINER;
  },


  /**
   * An alias for bootstrap definition publishers.
   * @type {module:tsumekusahtml/lib/HtmlDefinitionPublisher}
   */
  get DEFINITION() {
    defProp(this, 'DEFINITION', {
      value: tsumekusahtml.DEFINITION
    });
    return this.DEFINITION;
  },


  /**
   * An alias for bootstrap definition list publishers.
   * @type {module:tsumekusahtml/lib/HtmlDefinitionListPublisher}
   */
  get DEFINITION_LIST() {
    defProp(this, 'DEFINITION_LIST', {
      value: tsumekusahtml.DEFINITION_LIST
    });
    return this.DEFINITION_LIST;
  },


  /**
   * An alias for bootstrap ducument publishers.
   * @type {module:lib/HtmlDodumentPublisher}
   */
  get DOCUMENT() {
    defProp(this, 'DOCUMENT', {
      value: require(basePath + '/BootstrapDocumentPublisher').getInstance()
    });
    return this.DOCUMENT;
  },


  /**
   * An alias for bootstrap element array publishers.
   * @type {module:tsumekusahtml/lib/HtmlElementArrayPublisher}
   */
  get ELEMENT_ARRAY() {
    defProp(this, 'ELEMENT_ARRAY', {
      value: tsumekusahtml.ELEMENT_ARRAY
    });
    return this.ELEMENT_ARRAY;
  },


  /**
   * An alias for bootstrap inline code publishers.
   * @type {module:tsumekusahtml/lib/HtmlInlineCodePublisher}
   */
  get INLINE_CODE() {
    defProp(this, 'INLINE_CODE', {
      value: tsumekusahtml.INLINE_CODE
    });
    return this.INLINE_CODE;
  },


  /**
   * An alias for bootstrap link publishers.
   * @type {module:tsumekusahtml/lib/HtmlLinkPublisher}
   */
  get LINK() {
    defProp(this, 'LINK', {
      value: tsumekusahtml.LINK
    });
    return this.LINK;
  },


  /**
   * An alias for bootstrap list publishers.
   * @type {module:tsumekusahtml/lib/HtmlListPublisher}
   */
  get LIST() {
    defProp(this, 'LIST', {
      value: tsumekusahtml.LIST
    });
    return this.LIST;
  },


  /**
   * An alias for bootstrap list item publishers.
   * @type {module:tsumekusahtml/lib/HtmlListItemPublisher}
   */
  get LIST_ITEM() {
    defProp(this, 'LIST_ITEM', {
      value: tsumekusahtml.LIST_ITEM
    });
    return this.LIST_ITEM;
  },


  /**
   * An alias for bootstrap paragraph publishers.
   * @type {module:tsumekusahtml/lib/HtmlParagraphPublisher}
   */
  get PARAGRAPH() {
    defProp(this, 'PARAGRAPH', {
      value: tsumekusahtml.PARAGRAPH
    });
    return this.PARAGRAPH;
  },


  /**
   * An alias for bootstrap preformatted paragraph publishers.
   * @type {module:tsumekusahtml/lib/HtmlPreformattedParagraphPublisher}
   */
  get PREFORMATTED_PARAGRAPH() {
    defProp(this, 'PREFORMATTED_PARAGRAPH', {
      value: tsumekusahtml.PREFORMATTED_PARAGRAPH
    });
    return this.PREFORMATTED_PARAGRAPH;
  },


  /**
   * An alias for bootstrap strong publishers.
   * @type {module:tsumekusahtml/lib/HtmlStrongPublisher}
   */
  get STRONG() {
    defProp(this, 'STRONG', {
      value: tsumekusahtml.STRONG
    });
    return this.STRONG;
  },


  /**
   * Utilities for tsumekusahtml.
   * @namespace
   * @borrows module:tsumekusahtml.util
   */
  get util() {
    defProp(this, 'util', {
      value: tsumekusahtml.util
    });
    return this.util;
  }
};
