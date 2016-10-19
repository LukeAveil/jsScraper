var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var url = 'http://www.gocardless.com';
var images = [];

app.get('/', function(req, res){

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      $('img').each(function(i, image){
        images.push($(image).attr('src'));
      });
      console.log(images);
    }
  });
});

app.listen('8081');
exports = module.exports = app;
