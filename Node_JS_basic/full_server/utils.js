import fs from 'fs/promises';

export function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
  .then((data) => {
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const header = lines.shift();
    const students = {};
    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length < 4) continue;
      const [firstname, , , field] = parts;
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }
    return students;
  });
}
