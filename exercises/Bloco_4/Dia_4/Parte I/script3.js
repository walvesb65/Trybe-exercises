/* Agora inverta o lado do triângulo. Por exemplo: */
const revers = (num) => {
let symbol = '*';
let inputLine = '';
let inputPosition = num;

for (let lineIndex = 0; lineIndex < num; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= num; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
 };
};
revers(5);