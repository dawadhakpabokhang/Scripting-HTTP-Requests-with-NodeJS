var getHTML = require('../make-it-a-module/http-functions');

var https = require('https');
var args = process.argv.slice(2);
let host = args[0];
let path = args[1];

var requestOptions = {
  host: host,
  path: path
};

function printUppercase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printUppercase);