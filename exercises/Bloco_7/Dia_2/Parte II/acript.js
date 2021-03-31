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


const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

const totalAlunos = () => {
  const alunosFull = allLessons.lesson1['numeroEstudantes'] + allLessons.lesson2['numeroEstudantes'] + allLessons.lesson3['numeroEstudantes'];
  return alunosFull;
}
console.log(totalAlunos());
/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const retornoIndex = (objeto, index) => {
return Object.values(objeto)[index];
} 
console.log(retornoIndex(lesson1,[0]));
console.log(retornoIndex(lesson2,[0]));
console.log(retornoIndex(lesson3,[0]));
/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.*/

const parKeyValues = (objeto, chave, valor) => {
  const trueOrFalse = Object.entries(objeto)
  for(let i = 0; i < trueOrFalse.length; i++){
    if(trueOrFalse[i][0] == chave && trueOrFalse[i][1] == valor) {
      return true
    } else {
      return false
    }
   }
  }
console.log(parKeyValues(lesson1, 'materia', 'Matemática'))
/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */
