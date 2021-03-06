var https = require('https');
var args = process.argv.slice(2);
let host = args[0];
let path = args[1];

function getAndPrintHTML (options) {

    /* Add your code here */
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var text = "";

    response.on('data', function (data) {
      text += data;
      console.log(text);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

var requestOptions = {
  host: host
  path: path
};

getAndPrintHTML(requestOptions);