/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */
const lista = (num) => {
  let simbol = '*';
  let entrada = '';
  for (let index = 0; index < num; index += 1){
    entrada = entrada + simbol;
  };
  for (let index = 0; index < num; index += 1){
    console.log(entrada)
  };
};
lista(5);