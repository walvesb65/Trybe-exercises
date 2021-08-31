function doMatch(a, b, c) {
  return new Promise((resolve, reject) => {
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    reject("Informa apenas números")
    
    const result = (a + b) * c;
    
    if ( result < 50) {
      return reject('Valor muito abaixo');
    }
    resolve(result);
  });
}
doMatch(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(erros))

doMatch(1, 1, 'w')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(erros))


doMatch(1, 1, 1 )
  .then(resolve => console.log(resolve))
  .catch(error => console.log(erros))