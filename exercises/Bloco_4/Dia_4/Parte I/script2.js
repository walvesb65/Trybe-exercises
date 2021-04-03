/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: */

const lista = (num) => {
  if(typeof num !== 'number') {
    console.log('Valor declarado é invalido!')
  }else{
let simbol = '$'
let line = ''
for (let index = 0; index < num; index += 1){
  line += simbol
  console.log(line)
  };
 };
};

lista();