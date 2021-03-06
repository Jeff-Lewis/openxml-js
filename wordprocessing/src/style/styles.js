var HyperlinkStyleDefinitions = require('./hyperlink_styles'),
    NumberingStyles = require('./numbering_styles'),
    TableStyleDefinitions = require('./table_styles'),
    TextStyles = require('./text_styles'),
    Xml = require('oxml-base').Xml,
    XmlNamespaces = require('oxml-base').Constants.XmlNamespaces;

var DocDefaults = {
  rPrDefault: {
    rPr: {
      rFonts: {
        asciiTheme: 'minorHAnsi',
        eastAsiaTheme: 'minorEastAsia',
        hAnsiTheme: 'minorHAnsi',
        cstheme: 'minorBidi'
      },
      sz: {val: 24},
      szCs: {val: 24},
      lang: {
        val: 'en-US',
        eastAsia: 'en-US',
        bidi: 'ar-SA'
      }
    }
  },
  pPrDefault: {}
};

var ParagraphStyles = {
  List: 'ListParagraph',
  Heading1: 'Heading1',
  Heading2: 'Heading2'
};

var CharacterStyles = {
  Heading1: 'Heading1Char',
  Heading2: 'Heading2Char'
};

var ListNumberingStyles = {
  Numbers: 1,
  Bullet: 2
};

var TableStyles = {
  GridTable1Light: 'GridTable1Light1'
};

var HyperLinkStyles = {
  Hyperlink: 'Hyperlink',
  FollowedHyperlink: 'FollowedHyperlink'
};

var Styles = function() {
};

Styles.prototype.serialize = function() {
  var styles =
    [].concat(TextStyles)
      .concat(TableStyleDefinitions)
      .concat(NumberingStyles)
      .concat(HyperlinkStyleDefinitions);

  var elements = {
    'xmlns:mc': XmlNamespaces.mc,
    'xmlns:r': XmlNamespaces.r,
    'xmlns:w': XmlNamespaces.w,
    'xmlns:w14': XmlNamespaces.w14,
    'xmlns:w15': XmlNamespaces.w15,
    'mc:Ignorable': 'w14 w15',
    docDefaults: DocDefaults,
    style: styles
  };

  return Xml.element('styles', elements, 'w');
};

module.exports = Styles;
module.exports.ParagraphStyles = ParagraphStyles;
module.exports.CharacterStyles = CharacterStyles;
module.exports.ListNumberingStyles = ListNumberingStyles;
module.exports.TableStyles = TableStyles;
module.exports.HyperlinkStyles = HyperLinkStyles;
