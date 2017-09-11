
module.exports = function getHTML (options, callback) {
  var https = require('https');
    /* Your code here */
      /* Add your code here */

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var text = "";

    response.on('data', function (data) {
      text += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(text);
      console.log('Response stream complete.');
    });

  });

};