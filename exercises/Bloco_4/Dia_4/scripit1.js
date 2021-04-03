const lista = (num) => {
  let simbol = '*';
  let entrada = '';
  for (let index = 0; index < num; index += 1){
    entrada = entrada + simbol;
  };
  for (let index = 0; index < num; index += 1){
    console.log(entrada)
  };
};
lista(5);