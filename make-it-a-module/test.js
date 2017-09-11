var https = require('https');
var args = process.argv.slice(2);
let host = args[0];
let path = args[1];

var requestOptions = {
  host: host,
  path: path
};

var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);