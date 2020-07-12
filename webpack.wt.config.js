var Request = require('request-promise');
var Webpack = require('webpack');
var _       = require('lodash');


var LIST_MODULES_URL = 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1?key=eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiJmZGZiOWU2MjQ0YjQ0YWYyYjc2YzAwNGU1NjgwOGIxNCIsImlhdCI6MTQzMDMyNjc4MiwiY2EiOlsiZDQ3ZDNiMzRkMmI3NGEwZDljYzgwOTg3OGQ3MWQ4Y2QiXSwiZGQiOjAsInVybCI6Imh0dHA6Ly90ZWhzaXMuZ2l0aHViLmlvL3dlYnRhc2tpby1jYW5pcmVxdWlyZS90YXNrcy9saXN0X21vZHVsZXMuanMiLCJ0ZW4iOiIvXnd0LXRlaHNpcy1nbWFpbF9jb20tWzAtMV0kLyJ9.MJqAB9mgs57tQTWtRuZRj6NCbzXxZcXCASYGISk3Q6c';

module.exports = Request(LIST_MODULES_URL, { json: true }).then(function (data) {
  var modules = data.modules;
  console.log('modules', modules)
  return {
    entry: './webtask',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/build',
      library: true,
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [{
        loader: "pug-loader",
        test: /\.jade$/
      }],
    },
    externals: _(modules).reduce(function (acc, module) {
      return _.set(acc, module.name, true);
    }, {
      // Not provisioned via verquire
      'auth0-api-jwt-rsa-validation': true,
      'auth0-authz-rules-api': true,
      'auth0-oauth2-express': true,
      'auth0-sandbox-ext': true,
      'detective': true,
      'sandboxjs': true,
      'webtask-tools': true,
    }),
    plugins: [
      new Webpack.optimize.DedupePlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    resolve: {
      modulesDirectories: ['node_modules'],
      root: __dirname,
      alias: {},
    },
    node: false
  };
});
