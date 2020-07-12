var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
// var template = require('./templates/index.jade');
var metadata   = require('./webtask.json');

var app = express();

app.use(auth0({
  scopes: 'read:connections'
}));

app.set('view engine', 'pug');
app.set('views', 'templates');

app.get('/', function (req, res) {
  res.header("Content-Type", 'text/html');
  res.status(200).render('index.jade', {
    baseUrl: res.locals.baseUrl
  });
});

// This endpoint would be called by webtask-gallery to dicover your metadata
app.get('/meta', function (req, res) {
  res.status(200).send(metadata);
});

module.exports = app;
