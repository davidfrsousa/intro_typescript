const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    let result = n1+n2;
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

add(number1, number2, printResult, resultPhrase);
