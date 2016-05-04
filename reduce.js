'use strict';

var _ = require('lodash');

module.exports = function(articles) {
  return _.chain(articles)
    .groupBy('article')
    .map(function(articles, articleNum) {
      var articleCount = _.reduce(articles, function(sum, article) {
        return sum + article.quantity;
      }, 0);

      return { article: parseInt(articleNum), total_orders: articleCount }
    })
    .sortBy('total_orders')
    .reverse();
};
