//  Atividade 1 parte 2 
function factorial(number) {
    let result = 1
     for (let index = number; index >= 1; index = index - 1) {
         result = result * index
     }
     return result
   }
   
   console.log(factorial(5))

// Atividade 2 Parte 2
function maxWord(string) {
     let wordArray = string.split(' ');
     let word = 0;
     let maxword = ''; 
        for(let index = 0; index < wordArray.length; index += 1){
           if(wordArray[index].length > word){
               maxword = wordArray[index]
           } 
        }
        return maxword;
   }
   console.log(maxWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

//  Atividade 4 Parte 2 Etapa 1
function addTrybexWin(string) {
     const output = 'Tryber x aqui!';
     const result = output.replace('x', string);
     return result;
   }
   const word = 'Willian'
   console.log(addTrybexWin(word))
  