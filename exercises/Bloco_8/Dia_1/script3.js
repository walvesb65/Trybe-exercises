/* Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
A validação da resposta não deve ser case sensitive.
Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste')) */

const gabarito = 'higher order function';
const respostaUser = 'HIGHER ORDER FUNCTION';


const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase() ? true : false;

console.log(checkAnswer2(gabarito)(respostaUser));