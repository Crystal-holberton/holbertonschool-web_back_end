import fs from 'fs/promises';

export function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n').slice(1);
      const result = {};

      lines.forEach((line) => {
        const [first, , , field] = line.split(',');
        if (!result[field]) result[field] = [];
        result[field].push(first);
      });

      return result;
    });
}
