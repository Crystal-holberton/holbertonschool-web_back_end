// create a function countStudents in the file 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.trim().split('\n').filter((line) => line.length > 0);
    lines.shift();
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }
    const studentFields = {};
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!studentFields[field]) {
        studentFields[field] = [];
      }
      studentFields[field].push(firstname);
    });
    console.log(`Number of students: ${lines.length}`);
    for (const field in studentFields) {
      if (field) {
        const list = studentFields[field].join(', ');
        console.log(`Number of students in ${field}: ${studentFields[field].length}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
