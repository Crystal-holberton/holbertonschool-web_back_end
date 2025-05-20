// recreate the small HTTP server using Express
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const dbfile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const originalLog = console.log;
    console.log = () => {};
    let logs = '';
    console.log = (msg) => {
      logs += `${msg}\n`;
    };
    await countStudents(dbfile);
    console.log = originalLog;
    res.write(logs);
  } catch (error) {
    res.write(error.message);
  } finally {
    res.end();
  }
});

app.listen(1245, () => {
  console.log('Express server listening on port 1245');
});

module.exports = app;
