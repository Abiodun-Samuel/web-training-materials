function oddNumbers(arr) {
  if (Array.isArray(arr)) {
    let oddNumbers = [];
    for (let x of arr) {
      if (x % 2 > 0 && typeof x === "number") {
        oddNumbers.push(x);
      } else {
        return "Please check the array items";
      }
    }
    return oddNumbers;
  } else {
    return "Please pass an array instead";
  }
}
let numbers = ["a", "b", 8, "d"];
let oddNum = oddNumbers(numbers);
// console.log(oddNum);

// this new delaraction is called arrow function
//
const removeVowel = (str) => {
  let check = typeof str === "string";
  let res = [];
  let vowels = ["a", "e", "i", "o", "u", " "];
  if (check) {
    for (let x of str) {
      if (!vowels.includes(x)) {
        res.push(x);
      }
    }
    return res;
  } else {
    return "Please enter a string";
  }
};
let sentence = "write a function for y the odd numbers in an array";
let val = removeVowel(sentence);
// console.log(val);

// higher order methods for array
// let array = [1, 2, 3, 4, 5, 6, 11, 7, 8, 9];
let string = "please enter a string";

// let ch = string.includes('')
//filter method
// let res_array = array.filter((x) => {
//   // let odd =
//   return x != 11 && typeof x != "string";
// });

//map
//forEach
// array.map((item) => {
//   if (item == "man") {
//     return `the ${item}`;
//   } else {
//     return item;
//   }
// });
let array = ["boy", "girl", "man"];
console.log(array)
array.forEach((y, i) => {
 array[i] = y + 'ab'
});
console.log(array)
