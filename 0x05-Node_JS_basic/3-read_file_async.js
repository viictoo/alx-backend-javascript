const fs = require('fs');
const readline = require('readline');

async function countStudents(path) {
  let studentNum = 0;
  const subjects = new Map();

  // Use createReadStream instead of readFile
  const stream = fs.createReadStream(path, { encoding: 'utf8' });
  const reader = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });

  const asyncReadline = new Promise((resolve, reject) => {
    reader.on('line', (line) => {
      const columns = line.split(',');
      const subject = columns[columns.length - 1];
      if (subject !== 'field') {
        studentNum++;
        if (!subjects.has(subject)) {
          subjects.set(subject, []);
        }
        subjects.get(subject).push(columns[0]);
      }
    });

    reader.on('close', resolve);
    reader.on('error', () => reject(new Error('Cannot load the database')));
  });

  await asyncReadline;

  console.log(`Number of students: ${studentNum}`);
  subjects.forEach((students, subject) => {
    console.log(`Number of students in ${subject}: ${students.length}. List: ${students.join(', ')}`);
  });
}

module.exports = countStudents;
