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

const totalAlunos = (objeto) => {
  const alunos1 = allLessons.lesson1['numeroEstudantes']
  const alunos2 = allLessons.lesson2['numeroEstudantes']
  const alunos3 = allLessons.lesson3['numeroEstudantes']
  return alunos1 + alunos2 + alunos3
}
console.log(totalAlunos());
/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */