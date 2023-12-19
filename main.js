"use: strict";
function getNumberOfGrades(grades) {
  return grades.length;
}

function getSumGrades(grades) {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
  });
  return sum;
}

function getAverageValue(grades) {
  return getSumGrades(grades) / grades.length;
}

function getPassingGrades(grades) {
  return grades.filter((grade) => {
    return grade >= 10;
  });
}

function getFailingGrades(grades) {
  return grades.filter((grade) => {
    return grade < 10;
  });
}

function getRaisedGrades(grades) {
  return grades.map((grade) => {
    return grade + 1 > 20 ? 20 : (grade += 1);
  });
}

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [12, 19, 10, 4, 15, 9];

const renderStats2Table = (grades) => {
  const tbody = document.querySelector("#stats-table2 tbody");
  tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades)}</td>
        <td>${getFailingGrades(grades)}</td>
        <td>${getRaisedGrades(grades)}</td>
    </tr>`;
};

const renderStatsTable = (grades) => {
  const tbody = document.querySelector("#stats-table tbody");
  tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
};

const render = (grades) => {
  const grade = grades.join(", ");
  console.log(`Grades: ${grade}`);
  renderStatsTable(grades);
  renderStats2Table(grades);
};

gradesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newGrade = Number.parseInt(yourGrade.value, 10);
  grades.push(newGrade);
  yourGrade.value = "";
  render(grades);
});

render(grades);
