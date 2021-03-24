/* Atividade fixação 1 */
const testingScope = escopo =>  {
  if (escopo === true){
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = '${ifScope} ótimo, fui utilizada no escopo !'
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)'
    console.log(elseScope)
  }
}
testingScope();

/* Atividade fixação 2 */
const oddsAndEvens = [54, 5, -4, 54, 54, 2];

     const ordenando = () => { 
      return oddsAndEvens.sort((a, b) => a - b);
     }

    console.log(ordenando());