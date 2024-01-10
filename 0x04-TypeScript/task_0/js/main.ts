interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student0: Student = {
  firstName: 'Don',
  lastName: 'Juan',
  age: 69,
  location: 'Espana',
};

const student1: Student = {
  firstName: 'Mick',
  lastName: 'Jenkins',
  age: 32,
  location: 'Jazz',
};

const studentsList: Student[] = [student0, student1];
const props: (keyof Student)[] = ['firstName', 'lastName', 'age', 'location'];

// console.log(studentsList[0][props[1]])

function tableCreate() {
  const body = document.body,
    tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < studentsList.length; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < props.length; j++) {
      const td = tr.insertCell();
      let st = studentsList[i];
      let value: keyof Student = props[j];
      td.appendChild(document.createTextNode(String(st[value])));
      td.style.border = '1px solid black';
      if (i === 1 && j === 1) {
        td.setAttribute('rowSpan', '2');
      }
    }
  }
  body.appendChild(tbl);
}
tableCreate();