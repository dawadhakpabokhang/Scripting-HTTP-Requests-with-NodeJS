var https = require('https');

function getHTML (options, callback) {

    /* Add your code here */
  function printHTML (html) {
    console.log(html);
  }

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
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions);