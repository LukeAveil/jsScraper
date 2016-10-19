var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var url = 'http://www.gocardless.com';

var images = [];
var links = [];
var scripts = [];

app.get('/', function(req, res){

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      $('img').each(function(i, element){
        images.push($(element).attr('src'));
      });

      $('link').each(function(i, element){
        links.push($(element).attr('href'));
      });

      $('script').each(function(i, element){
        scripts.push($(element).attr('src'));
      });

      console.log(images);
      console.log(links);
      console.log(scripts);
    }
  });
});

app.listen('8081');
exports = module.exports = app;
