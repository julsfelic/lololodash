'use strict';

var _ = require('lodash');

var filterWhere = function(collection) {
  return _.filter(collection, { active: true });
};

module.exports = filterWhere;
