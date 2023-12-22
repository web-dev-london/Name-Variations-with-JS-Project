'use: strict';

// Get a Length
function getNumberOfGrades(grades) {
  return grades.length;
}

// Get a Sum
function getSumGrades(grades) {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
  });
  return sum;
}

// Get a Average
function getAverageValue(grades) {
  return getSumGrades(grades) / grades.length;
}

// Get Passing Grades
function getPassingGrades(grades) {
  return grades.filter((grade) => {
    return grade >= 10;
  });
}

// Get Failing Grades
function getFailingGrades(grades) {
  return grades.filter((grade) => {
    return grade < 10;
  });
}

// Get Raised Grades
function getRaisedGrades(grades) {
  return grades.map((grade) => {
    return grade + 1 > 20 ? 20 : (grade += 1);
  });
}

// Target to Grades Form
const gradesForm = document.querySelector('#grades-form');
// Target to Input File
const yourGrade = document.querySelector('#your-grade');

// Declared Grades
const grades = [12, 19, 10, 4, 15, 9];

/* Named Function Expression, 
  Target Tbody element & with Template Literal & 
  Interpolation attached a functions */
const renderStats2Table = (grades) => {
  const tbody = document.querySelector(
    '#stats-table2 tbody',
  );
  tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades)}</td>
        <td>${getFailingGrades(grades)}</td>
        <td>${getRaisedGrades(grades)}</td>
    </tr>`;
};

/* Named Function Expression, 
  Target Tbody element & with Template Literal & 
  Interpolation attached a functions */
const renderStatsTable = (grades) => {
  const tbody = document.querySelector(
    '#stats-table tbody',
  );
  tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
};

/* Named Function Expression, declared variable & 
used Join(glue) Method, called console as well as Render Tables */
const render = (grades) => {
  const grade = grades.join(', ');
  console.log(`Grades: ${grade}`);
  renderStatsTable(grades);
  renderStats2Table(grades);
};

/* During any stage of Event Flow cancels the event, 
Get Number with ParseInt & add it in an array follow get value & call render function*/
gradesForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newGrade = Number.parseInt(yourGrade.value, 10);
  grades.push(newGrade);
  yourGrade.value = '';
  render(grades);
});

render(grades);
