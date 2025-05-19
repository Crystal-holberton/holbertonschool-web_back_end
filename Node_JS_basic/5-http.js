// create a small HTTP server using the http module
const http = require('http');
const countStudents = require('./3-read_file_async');

const dbfile = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'content-type': 'text/plain' });
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
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Invalid request');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});
module.exports = app;
