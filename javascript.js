// operators

// Comparison Operators
// = assignment op
// == === equal to
// != !== Not equal to

// Arithmetic Operators
// + addition
// - substraction
// * multiplication
// / division
// ++ increment
// -- decrement

// or ||
// and &&

// let firstName = "sam"
// let lastName = 5
// let fullName = firstName + lastName

// console.log(firstName === lastName)
// console.log(typeof firstName)

// let x = 10
// let y = 3
// x -= 12
// console.log(x)
function __val(data) {
  const data__type = typeof data;
  return data__type;
}
let type = __val(true);
// console.log(type)

function solveQuadraticEq(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let answer_one;
  let answer_two;
  if (d >= 0) {
    answer_one = (-b + Math.sqrt(d)) / (2 * a);
    answer_two = (-b - Math.sqrt(d)) / (2 * a);
    document.write(
      `answer one is:` + answer_one + ". answer two is " + answer_two
    );
  } else {
    document.write("Unable to solve the equation");
  }
}
// solveQuadraticEq(10, 40, 5);

// conditional statement
// if statement
// if (age >= 18) {
//   document.write("You are eligible for voting");
// } else {
//   document.write("You are eligible for voting");
// }

// if (age >= 18) {
//   document.write("You are eligible for voting");
// } else if (age === 10) {
//   document.write("You are 10 years old");
// } else if (age === 15) {
//   document.write("You are 15 years old");
// } else {
//   document.write("You are not eligible for voting");
// }
// let age = 20;
// switch (age) {
//   case 10:
//     document.write("You are 10 years old");
//     break;
//   case 15:
//     document.write("You are 15 years old");
//     break;
//   default:
//     document.write("You are old");
// }
let lname = ["BMW", "Volvo", "Saab", "Ford"];
let h3 = document.querySelectorAll(".paragraph");
// console.log(h3)

// let num = 10
// for (let i = 0; i < lname.length; i++) {
//   if (i == 5) {
//     break;
//   }
//   // 9.9 < 10
//   console.log(lname[i]);
//   // document.write(i)
// }
// const x in lname  // const x = 0; x < lname.length; x++
// for (let x in h3) {
//   console.log(x);
// }

// Array
let data = [1, true, "qwery", 678, ["asdf", "wert", ["hjkl", "uiuioon"]]];
let schools = ["MHS", "Air Force", "United"];
// let schools = new Array('MHS', 'Air Force', 'United')

// let value = []
//get item inside an array
// document.write(value[2])
//get the length of an array
// document.write(schools.toString())
// const value = schools
// document.write(value)
// const newArray = data.concat(schools, data, data)
// document.write(schools)
// const newArr = schools.splice(3)
// console.log(schools)

function getEl(n) {
  let isArray = Array.isArray(n);
  if (isArray === true) {
    return "The variable is an array";
  } else {
    return "The variable is not an array";
  }
}
let array = [3, 4, 5];
const res = getEl(array);

let arr_one = [5, 2, 3, 4, 3, "qwert"];
arr_one[5] = "abc";
// console.log(arr_one)

let arr_two = [5, 6, 7, 8];

function compute(x, y) {
  let res = x.concat(y);
  return res;
}
const output = compute(arr_one, arr_two);

// console.log(output)

//querySelector()
//querySelectorAll()
// getElementById()
// getElementsByClassName()
// getElementsByTagName()

// function dom() {

// }
// ()=>{}

// array.map(() => { })

// function hof(f) {
//   return f
// }
// function chck() {
//   console.log('after')
// }

// let x = hof(chck)
// // console.log(x)
// x()
