let students = [];

/* Enviando dados (nome e notas) */
createStudent("Victor", 5, 6);
createStudent("Reinalda", 9, 4);
createStudent("Erinaldo", 3, 9);
createStudent("Mateus", 5, 9);

/* Função de listagem */
listStudents();

function createStudent(name, fn, sn) {
  let student = {
    name: name,
    firstNote: fn,
    secondNote: sn,
    status: calculateStatus(fn, sn),
  };
  appendData(student);
}

function calculateStatus(fn, sn) {
  let result;
  if ((fn + sn) / 2 >= 7) {
    result = "approved";
  }
  return result ? "approved" : "denied";
}

function appendData(obj) {
  students.push(obj);
}

function listStudents() {
  alert("Ok, here is the result students!");
  for (let student of students) {
    alert(`${student.name}!`);
    alert(`Com as notas ${student.firstNote} e ${student.secondNote}...`);
    alert(student.status == "approved" ? "Você foi aprovado(a)." : "Você foi recusado(a).");
  }  
}