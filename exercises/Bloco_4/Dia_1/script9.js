/* 9 - Escreva um programa que defina três números em variáveis 
no seu começo e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele retorna false.

- Bonus: use somente um if . */
 
let numero1 = 50;
let numero2 = 40;
let numero3 = 20;

if (numero1 %2 !== 0|| numero2 %2 !== 0|| numero3 %2 !== 0){
  console.log(true)
}else{
  console.log(false);
}