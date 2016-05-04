var _ = require('lodash');

var worker = function(collection) {
  _.filter(collection, { active: true });
};

module.exports = worker;
