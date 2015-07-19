var when = require('when');

var provider = {
  withSingleton: function () {
    var Fetcher = require('../engines/habrahabr/fetcher');
    return when.resolve(new Fetcher);
  },
  withPackage: function () {
    return when.resolve(require('cheerio'));
  }
}

var HabraParser = require('../engines/habrahabr/parser');

new HabraParser(provider).parse({
  url: 'http://habrahabr.ru/post/235813/'
})
