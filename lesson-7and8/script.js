// const persons = [
//   {
//     name: "Segun",
//     age: 20,
//     status: true,
//   },
//   {
//     name: "Segun",
//     age: 20,
//     status: false,
//   },
// ];
// // higher array methods or higher order function
// //map
// // function access(item, index){
// //     return {name: item.name, age: item.age}
// //     // return item + ' ' + index
// // }
// // let person = persons.map(access);
// // console.log(person);

// // filter
// function getColr(item, index, array) {
//     // return item.length !== 4 ? item : null
//     return item.status
// }
// let colored = persons.filter(getColr);
// console.log(colored);

// //forEach
// // function val (item, index, array){
// //     array[index] = `${item} ${index}`
// // }
// // color.forEach(val);
// // console.log(color)

// // objects
// // let color = "Red";
// // const person = {
// //   name: "Segun",
// //   age: 20,
// //   color,
// //   status: true,
// //   getColor(x) {
// //     this.name = x;
// //   },
// // };
// // person.getColor("samuel");
// // console.log(person);

// dom
// const body = document.body
// const div = document.createElement('div')

// const h2 = document.createElement('h2')
// // h2.className = 'my_title'
// h2.id = 'my_id'
// h2.style.fontSize = '30px'

// const text = document.createTextNode('The first title')

// h2.appendChild(text)

// div.appendChild(h2)
// body.appendChild(div)

const button = document.getElementById('button')
const form =  document.getElementById('form')
button.addEventListener('click', ()=> {
   console.log(form)
})