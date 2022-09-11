const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log(inputIndex);
  if (input[inputIndex] === "e") {
    resultArray.push(input[inputIndex]);
  }
  if (input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log(vowelIndex);
    if (input[inputIndex] === vowels[vowelIndex]) {
      //console.log(input[inputIndex]);
      resultArray.push(input[inputIndex]);
    }
  }
}
//console.log(resultArray);
let resultString = (resultArray.join(""));
console.log(resultString.toUpperCase());
