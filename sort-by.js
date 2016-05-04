'use strict';

var _ = require('lodash');

var sortItems = function(collection) {
  return _.sortBy(collection, function(item) {
    return -item.quantity;
  });
};

module.exports = sortItems;
