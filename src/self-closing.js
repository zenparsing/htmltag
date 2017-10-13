'use strict';

const SELF_CLOSING_TAGS = [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
];

const SELF_CLOSING_REGEX = new RegExp(`^(?:${ SELF_CLOSING_TAGS.join('|') })$`, 'i');

function selfClosing(tag) {
  return SELF_CLOSING_REGEX.test(tag);
}

module.exports = selfClosing;
