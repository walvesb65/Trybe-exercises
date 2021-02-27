/* 11 - Uma pessoa que trabalha de carteira assinada no Brasil 
tem descontados de seu salário bruto o INSS e o IR. Faça um programa que,
 dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

let sal = 3000;
let salLiq;

let aliquotaInss = 0;
let aliquotaIr = 0;

if (sal === 1556.94) {
  aliquotaInss = sal * 0.08
} else if (sal <= 2594.92) {
  aliquotaInss = sal * 0.09
} else if (sal <= 5189.82) {
  aliquotaInss = sal * 0.11
} else {
  aliquotaInss = sal + 570.88
}

let salBase = sal - aliquotaInss

if (salBase === 1903.98) {
  aliquotaIr = 0
} else if (salBase <= 2826.65) {
  aliquotaIr = salBase * 0.075 - 142.80
} else if (salBase <= 3751.05) {
  aliquotaIr = salBase * 0.15 - 354.80
} else if (salBase <= 4664.68) {
  aliquotaIr = salBase * 0.225 - 636,13
} else {
  aliquotaIr - salBase * 0.275 - 869.36
}

console.log(salBase - aliquotaIr)