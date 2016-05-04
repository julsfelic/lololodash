'use strict';

var _ = require('lodash');

module.exports = function(comments) {
  return _.chain(comments)
    .groupBy('username')
    .map(function(usercomments, username) {
      return { username: username, comment_count: _.size(usercomments) };
    })
    .sortBy(function(user) {
      return -user.comment_count;
    });
};
