var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var START_URL = 'http://www.gocardless.com';

var images = [];
var links = [];
var scripts = [];
var pagesToVisit = [];

app.get('/', function(req, res){

  request(START_URL, function(error, response, html){
    var $ = cheerio.load(html);
    collectLinks($);

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
  });
});

function collectLinks($) {
  var relativeLinks = $("a[href^='/']");

  relativeLinks.each(function(){
    pagesToVisit.push(START_URL + $(this).attr('href'));
  });
}

app.listen('8081');
exports = module.exports = app;
