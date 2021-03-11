/* Array com itens para ser add no codigo para preencher a minha lista no html */
let itensIngredientes = [
  '2 Ovos ',
  '1 pitada de sal',
  '300g de farinha',
  'oleo a gosto',
  'cebola',
];
/* Recupera minha meu elemento ul no htm e atribui na minha nova vareavel itensDaLista */
let itensDaLista = document.querySelector('.lista-ingredientes');
/* Aqui estou fazendo uma estrututura de repetição para que meu array seja percorrido e cada iten
se transforme em uma  li dendo da minha lista! */
for(i = 0; i < itensIngredientes.length; i ++){
  let ingrediente = itensIngredientes[i]
  /* com o comando creatElement abaixo estamos atribuindo nosso elemento (li)
   para ser add no htm depois */
  let ingredienteDaLista = document.createElement('li')
  /* o comando InnerText abaixo faz com que meu elemento (li) criado na varialel 
  ingredienteDaLista recebar o texto que recuperei na variavel (ingrediente*/
  ingredienteDaLista.innerText = ingrediente;
  /* Agora com o comando appendChild eu vou enviar as infimações que criei para meu html
  pegando um o elemento que vai ser o pai da minha aplicação  */
  itensDaLista.appendChild(ingredienteDaLista)
}
