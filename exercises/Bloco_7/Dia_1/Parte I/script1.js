/*  Atividade 1 parte 2 */
function factorial(number) {
 let result = 1
  for (let index = number; index >= 1; index = index - 1) {
      result = result * index
  }
  return result
}

console.log(factorial(5))

/* Atividade 4 Parte 2*/
function addTrybexWin(string) {
  const output = 'Tryber x aqui!';
  const result = output.replace('x', string);
  return result;
}
const word = 'Willian'
console.log(addTrybexWin(word))