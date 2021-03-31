const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const novoTurno = (objeto, chave, valor) => {
  objeto[chave] = valor
  return objeto
}
console.log(novoTurno(lesson2, 'turno', 'manhã'));

const atividade = (objeto) => {
  return Object.keys(objeto)
}
console.log(atividade(lesson3));

const tamanhoObj = (objeto) => {
  return Object.keys(objeto).length     
}
console.log(tamanhoObj(lesson3));

const valor = (objeto) => {
  return Object.values(objeto);
}
console.log(valor(lesson1));


const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);