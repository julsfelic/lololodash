'use strict';

var _ = require('lodash');

module.exports = function(words) {
  return _.chain(words)
    .sortBy()
    .map(function(word) {
      return (word + 'chained').toUpperCase();
    })
    .value();
};
