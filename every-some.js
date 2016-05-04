'use strict';

var _ = require('lodash');

var sortTownsByTemp = function(towns) {
  var sortedTownsByTemp = {
    hot: [],
    warm: []
  };

  function checkTemp(temp) {
    return temp > 19;
  }

  _.forEach(towns, function(temps, town) {
    if (_.every(temps, checkTemp)) {
      sortedTownsByTemp.hot.push(town);
    } else if (_.some(temps, checkTemp)) {
      sortedTownsByTemp.warm.push(town);
    }
  });

  return sortedTownsByTemp;
};

module.exports = sortTownsByTemp;
