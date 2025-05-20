import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];
    readDatabase(filePath)
    .then((students) => {
      let response = 'This is the list of our students';
      const fields = Object.keys(students).sort((a, b) =>
        a.localeCompare(b, 'en', { sensitivity: 'base' }),
      );
      for (const field of fields) {
        const names = students[field];
        response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      res.status(200).send(response);
    })
    .catch(() => res.status(500).send('Cannot load the database'));
  }
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    const filePath = process.argv[2];
    readDatabase(filePath)
    .then((students) => {
      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    })
    .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
