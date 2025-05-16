let currentTerm = 'term1';

window.onload = () => {
  fetch('data/student_data.json')
    .then(res => res.json())
    .then(data => {
      const student = data[0];
      populateStudentInfo(student.studentInfo);
      renderReport(student.term1Report);
      setTimestamp();
    });
};

function populateStudentInfo(info) {
  document.getElementById('student-name').textContent = info.name;
  document.getElementById('roll-no').textContent = info.rollNo;
  document.getElementById('class').textContent = info.class;
  document.getElementById('dob').textContent = info.dob;
  document.getElementById('student-photo').src = info.photo;
}

function renderReport(termReport) {
  const tbody = document.querySelector('#report-table tbody');
  tbody.innerHTML = '';

  const maxMarks = Math.max(...termReport.subjects.map(s => s.marks));

  termReport.subjects.forEach(subject => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${subject.name}</td>
      <td class="${subject.marks < 35 ? 'failing' : ''}">${subject.marks}</td>
      <td>${subject.grade}</td>
      <td>${subject.teacherRemarks}</td>
    `;

    if (subject.marks === maxMarks) {
      tr.classList.add('highlight');
    }

    tbody.appendChild(tr);
  });

  document.getElementById('average-marks').textContent = termReport.overallSummary.average;
  document.getElementById('final-grade').textContent = termReport.overallSummary.grade;
  document.getElementById('attendance').textContent = termReport.overallSummary.attendance;
}

function switchTerm(term) {
  if (currentTerm === term) return;

  currentTerm = term;

  fetch('data/student_data.json')
    .then(res => res.json())
    .then(data => {
      const student = data[0];
      renderReport(term === 'term1' ? student.term1Report : student.term2Report);
    });
}

function setTimestamp() {
  const now = new Date();
  document.getElementById('timestamp').textContent =
    `Report Generated on ${now.toLocaleString()}`;
}
