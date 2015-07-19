'use strict';

function HabrahabrFetcher (provider) {
  this._provider = provider;
}

HabrahabrFetcher.prototype.fetchPost = function(url) {
  return this._provider.withPackage('request-promise')
    .then(function (request) {
      return request(url);
    });
};

// Test Stub
HabrahabrFetcher.prototype.fetchPost = function(url) {
  var fs = require('fs');
  var promisify = require('when/node');
  return promisify.call(fs.readFile, __dirname + '/../../samples/Ремейк Caesar III - математическая модель города.html', 'utf8');
};

module.exports = HabrahabrFetcher;
