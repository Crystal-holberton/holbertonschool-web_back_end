// create a function countStudents in the file 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);
    const fieldMap = {};
    for (const line of students) {
      const parts = line.split(',');
      if (parts.length < 4) continue;
      const firstname = parts[0].trim();
      const field = parts[3].trim();
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    }
    const totalStudents = students.length;
    console.log(`Number of students in ${totalStudents}`);
    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
