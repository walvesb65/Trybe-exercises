let megaSena = [];

let primeiroNumero = Math.ceil(Math.random() * 60); /* gera numero aleatorio ente 1 e 60 */
let segundoNumero = Math.ceil(Math.random() * 60); 
let terceiroNumero = Math.ceil(Math.random() * 60); 
let quartoNumero = Math.ceil(Math.random() * 60); 
let quintoNumero = Math.ceil(Math.random() * 60); 
let sextoNumero = Math.ceil(Math.random() * 60); 

megaSena = [primeiroNumero ,segundoNumero ,terceiroNumero, quartoNumero, quintoNumero, sextoNumero]

let meuJogo = [20, 55, 38, 5, 48, 59];
let acertos = 0;

for (indexMega = 0; indexMega < megaSena.length; indexMega += 1){
  for (indexJogo = 0; indexJogo < meuJogo.length; indexJogo += 1){
    if (megaSena[indexMega] === meuJogo[indexJogo]) {
      acertos += 1
    }
  }
}
console.log(megaSena)
console.log(meuJogo)
console.log(acertos)
