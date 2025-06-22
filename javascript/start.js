// alert("Welcome here...");
// console.log("Hello world");
// console.info("Server started successfully");
// console.warn("High memory usage");
// console.error("Hi, I am an Error!!!");
// console.clear();
// console.debug("Username");
// console.table({1:[1,2,3,4,5], 2:[6,7,8,9,10]});
// let student = {
//     name: "Alice",
//     age: 20,
//     subjects: ["Math", "Science", "English"],
//     greet: function() {
//       console.log("Hi, I am Alice!");
//     }
//   };
  
//   console.dir(student);
//   let age = 17;
//   console.assert(age >= 18 , "Not Adult..." );

//   console.time();
//   for(let i=0 ; i<10 ; i++){
//     console.log(i);
//   }
//   console.timeEnd();

//   console.group("Soya");
//   console.log("manchurian");
//   console.log("tomato");
//   console.log("briyani");
//   console.log("chilly");
//   console.groupEnd();

//   console.count("Login");
//   console.count("Login");
//   console.count("Login");
//   console.count("Login");
//   console.countReset("Login");
//   console.count("Login");

//   console.groupCollapsed("Soya");
//   console.log("manchurian");
//   console.log("tomato");
//   console.log("briyani");
//   console.log("chilly");
//   console.groupEnd();

// console.groupCollapsed("Trace");
// function levelOne() {
//   levelTwo();
// }

// function levelTwo() {
//   levelThree();
// }

// function levelThree() {
//   console.trace("Reached levelThree");
// }

// levelOne();
// console.groupEnd();

// function human(){
//   squid();
// }

// function squid(){
//   bacteria();
// }

// function bacteria(){
//   console.trace("bacteria killed human!!!");
// }

// human();

// console.profile("Heavy Task");

// for (let i = 0; i < 1e6; i++) {
//   Math.sqrt(i);
// }

// console.profileEnd("Heavy Task");

// let div = document.getElementById("block1");

// console.log(div);
// console.dirxml(div);
var a=100;
function start(){
  var a=10;
  console.log(a);
}
start();
a=200;
console.log(a);
var a=50;
console.log(a);
console.log("_______");
let b=200;
console.log(b);
b=500;
console.log(b);
console.log("_______");
const c=1000;
console.log(c);
console.log(d);
var d=10;
console.log(e);
var e=10;
console.log(f);
var f=10;

let g;
console.log(typeof g);
let h=null;
console.log(h);

const array = [1,2,3,4,5,6,7,8,9,10];
console.log(array , typeof array);
array[1] = 11;
console.log(array);
array.sort();
console.log(array);
array.push(1000);
console.log(array);
function fun(){
  console.log("Hi ...");
}
console.log(typeof fun);

let pwd = Symbol("Password");
let person = {
  name : "R.Mithun",
  age : 19,
  isstudent : true,
  [pwd] : "123456789n"
};
console.log(typeof person);
console.log(person);

console.log(Object.keys(person));