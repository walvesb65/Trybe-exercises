/* 7 - Escreva um programa que converte uma nota dada em porcentagem 
(de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar 
se a nota passada for menor que 0 ou maior que 100. */

let nota = 49

if (nota < 0 || nota > 100) {
  console.log('SR sem rendimento ou nota invalidae!')
  return;
} else if (nota >= 90) {
  console.log('A')
} else if (nota >= 80) {
  console.log('B')
} else if (nota >= 70) {
  console.log('C')
} else if (nota >= 60) {
  console.log('D')
} else if (nota >= 50) {
  console.log('E')
} else if (nota < 50) {
  console.log('F')
}