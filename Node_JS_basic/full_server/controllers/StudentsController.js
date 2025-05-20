import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];

    readDatabase(path)
      .then((data) => {
        let response = 'This is the list of our students';
        const sortedFields = Object.keys(data).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        sortedFields.forEach((field) => {
          response += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        });

        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(path)
      .then((data) => {
        const names = data[major];
        res.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
