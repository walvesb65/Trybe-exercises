/* Aprofunde seus conhecimentosLeia atentamente os enunciados e faça o
 que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:

Questão 2 - Para o segundo exercício, você deve somar todos os valores contidos no array
  e imprimir o resultado;

 */

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let resultado = 0
  for(let index = 0; index < numbers.length; index++){
    resultado += numbers[index]
    console.log(resultado)
  }
