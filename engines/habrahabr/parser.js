'use strict';

function HabrahabrParser (provider) {
  this._provider = provider;
}

HabrahabrParser.prototype.parse = function(post) {
  var provider = this._provider;
  return provider
    .withSingleton('./fetcher')
    .then(function (fetcher) {
      return fetcher.fetchPost(post.url)
    })
    .then(function (html) {
      return provider.withPackage('cheerio')
        .then(function (cherrio) {
          return html;
        })
    })
    .done(
      function (data) {
        console.log('[RESULT]', data && data.substr(0, 30));
      },
      function (err) {
        console.log('[ERROR]', err);
      }
    );
};


module.exports = HabrahabrParser;
