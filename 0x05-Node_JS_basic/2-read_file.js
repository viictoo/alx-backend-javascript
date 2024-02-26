// get an present data from a csv file using a  hash mapp
const fs = require('fs');
const readline = require('readline');

function countStudents (path) {
  let studentNum = 0;
  const subjects = new Map();

  const stream = fs.createReadStream(path);
  const reader = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });

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
  reader.on('error', () => { throw new Error('Cannot load the database'); });

  reader.on('close', () => {
    console.log(`Number of students: ${studentNum}`);
    subjects.forEach((students, subject) => {
      console.log(`Number of students in ${subject}: ${students.length}. List: ${students.join(', ')}`);
    });
  });
}

module.exports = countStudents;
