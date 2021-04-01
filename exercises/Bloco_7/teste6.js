/* Escreva a função addOne para passar nos testes já implementados.*/
const assert = require('assert');
const novoArray = [];
  const addOne = (parametro) => {
    for(let i = 0; i < parametro.length; i ++){
      novoArray.push(parametro[i] + 1)
    }
    return novoArray
  }

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');  
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);