/* 5 - Faça um programa que defina três variáveis com os valores
dos três ângulos internos de um triângulo. Retorne true se os ângulos
representarem os ângulos de um triângulo e false caso contrário. */

let ang1 = 4;
let ang2 = 40;
let ang3 = 100;

let somatri = (ang1 + ang2 + ang3)

if (somatri == 180){
  console.log(true)
}else if(somatri !== 180){
  console.log(false)
  console.log('Error, agulos invalidos')
}