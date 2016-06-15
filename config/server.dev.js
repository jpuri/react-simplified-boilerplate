const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.dev.config');
const express = require('express');

const app = express();
const compiler = webpack(config);

const apiUrl = 'http://localhost:8080/api';

app.use('/api', (req, res) => {
  req.pipe(request(apiUrl + req.url)).pipe(res);
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
