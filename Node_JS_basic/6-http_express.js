// create a small HTTP server using Express module
const express = require('express');

const app = express().get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Express server listening on port 1245');
});

module.exports = app;
