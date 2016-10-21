var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

app.get('/', function(req, res){
  var url = 'http://www.gocardless.com';
  var pagesToVisit = [];

  request(url, function(error, response, html){
    var $ = cheerio.load(html);
    var images = [];
    var links = [];
    var scripts = [];
    var json = {url : "", images : "", links : "", scripts : ""};

    $('img').each(function(i, element){
      images.push($(element).attr('src'));
    });

    $('link').each(function(i, element){
      links.push($(element).attr('href'));
    });

    $('script').each(function(i, element){
      scripts.push($(element).attr('src'));
    });

    json.url = url;
    json.images = images;
    json.links = links;
    json.scripts = scripts;

    fs.writeFile('assets.json', JSON.stringify(json, null, 4), function(err){
      console.log('Data written to assets file, check project directory for assets.json file');
    });
  });

  function collectLinks($) {
    var relativeLinks = $("a[href^='/']");

    relativeLinks.each(function(){
      pagesToVisit.push(url + $(this).attr('href'));
    });
  }
});

app.listen('8081');
exports = module.exports = app;
