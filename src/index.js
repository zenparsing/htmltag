'use strict';

const TemplateResult = require('./template-result');

exports.TemplateResult = TemplateResult;

exports.html = function(callsite, ...values) {
  return new TemplateResult(callsite, values);
};

exports.createTag = function(actions) {
  return function htmlTag(literals, ...values) {
    return new TemplateResult(literals, values).evaluate(actions);
  };
};
