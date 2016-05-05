'use strict';

var _ = require('lodash');

module.exports = function(user) {
  var template = 'Hello <%= name %> (logins: <%= login.length %>)';

  return _.template(template)(user);
};
