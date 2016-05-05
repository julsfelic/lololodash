'use strict';

var _ = require('lodash');

module.exports = function(freelancers) {
  var totalSalary = _.reduce(freelancers, function(sum, freelancer) {
    return sum + freelancer.income;
  }, 0);

  var average = totalSalary / _.size(freelancers);

  var underperform = _.chain(freelancers)
    .filter(function(freelancer) {
      return freelancer.income <= average;
    })
    .sortBy('income');

  var overperform =  _.chain(freelancers)
    .filter(function(freelancer) {
      return freelancer.income > average;
    })
    .sortBy('income');

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};
