// function removeChars(inputString) {
//   let resultString = inputString.replace(/[acz]/g, '');
//   return resultString;
// }

// let input = "abcxyz123aczaczfskdfjksaacaz";
// let output = removeChars(input);
// console.log(output);



function wordCount(inputString) {
  let resultString = inputString.split(" ");
  // console.log(resultString);
  resultString = resultString.filter(word => word.length > 0);
  console.log(resultString)
  let totalWords = resultString.length;
  // console.log('Total words remaining', totalWords);
  return totalWords;
}

let string = "I am Md.Rashad. I am taking an online course in    Interactive Cares."
console.log('Total words remaining', wordCount(string));


// function vowelCount(inputString) {
//   let count = 0;
//   let vowels = 'aeiou';
//   let vowelCountString = inputString.toLowerCase();

//   for (let index = 0; index < vowelCountString.length; index++) {
//     const element = vowelCountString[index];
//     // console.log(element);

//     if (vowels.includes(element)) {
//       // console.log('element: ' + element); 
//       count += 1;
//     }

//   };
//   return count;
// }

// let string = 'Setu sir, Is the best explainer.';
// console.log('Total vowel count: ' + vowelCount(string));



// function strikeRate(run, ball){
//   if (ball === 0){
//     return 0;
//   }

//   let strike_rate = (run/ball)*100;
//   return strike_rate;

// }

// console.log('The batsman strike rate is ' + strikeRate(36, 6));