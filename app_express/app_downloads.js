'use strict'

/**
 * Module dependencies.
 */

let express = require('express');
let path = require('path');

let app = module.exports = express();

// path to where the files are stored on disk
let FILES_DIR = path.join(__dirname, 'public/files/');

app.get('/', function(req, res){
  res.send('<ul>' +
      '<li>Download <a href="/public/files/notes/groceries.txt">notes/groceries.txt</a>.</li>' +
      '<li>Download <a href="/public/files/amazing.txt">amazing.txt</a>.</li>' +
      '<li>Download <a href="/public/files/missing.txt">missing.txt</a>.</li>' +
      '<li>Download <a href="/public/files/CCTV大赛上海分赛区.txt">CCTV大赛上海分赛区.txt</a>.</li>' +
      '</ul>')
});

// /files/* is accessed via req.params[0]
// but here we name it :file
app.get('/public/files/:file(*)', function(req, res, next){
  res.download(FILES_DIR + req.params.file, function (err) {
    if (!err) return; // file sent
    if (err.status !== 404) return next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
