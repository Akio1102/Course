/* import { apikey } from "./utils.js";*/

/* import { apikey, abc as content } from "./utils.js";*/
/* import * as util from "./utils.js";*/

/* console.log(util.apikey);*/
/* console.log(apikey);*/

/* let userMessage = "Hello World!";*/
/*const userMessage = "Hello World!";

/* userMessage = "New Value"; -> Error no se puede reasignar

console.log(userMessage);
console.log(userMessage);
*/

/* if (10 === 10) {
  console.log("Works");
}*/

/* function createGreeting(userName, message = "Hello!") {
    console.log(userName);
    console.log(message);
    return `Hi, I am ${userName}. ${message}`;
  }
  
  const greeting1 = createGreeting("Cristian");
   console.log(createGreeting("Cristian"));
  console.log(greeting1);
  
  const greeting2 = createGreeting("Akio", "Hola como estas");
  console.log(greeting2);

  export default (userName,message)=>{
    console.log("Hello");
    return userName + message;
  }
 */

/* const user = {
    name: "Akio",
    age: 20,
    greet(){
        console.log("Hello");
        console.log(this.age);
    } 
};

console.log(user.name);
user.greet()

class User{
    constructor(name,age){
        this.name = name,
        this,age = age
    }

    greet(){
        console.log("Hi");
    }
}

const user1 = new User("Akio",20);
console.log(user1);
user1.greet() */

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies);

// const { firstName, lastName } = ["Cristian", "Diaz"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Cristian",
//   age: 20,
// };

// console.log(userName);
// console.log(age);
// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Cristian",
//   age: 20,
// };

// const newHobbies = ["Reading"];

// const mergedHoobies = [...hobbies, ...newHobbies];
// console.log(mergedHoobies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

/* const password = prompt("Your Password");

if (password === "Hello") {
  console.log("Hello Works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted");
}

const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
  console.log(hobby);
}*/

/* function handleTimeOut() {
  console.log("Time Out!");
}

const handleTimeOut2 = () => {
  console.log("Time Out ... again");
};

setTimeout(handleTimeOut, 2000);
setTimeout(handleTimeOut2, 3000);
setTimeout(() => {
  console.log("More timing out...!");
}, 4000);

function greeter(greeterFn) {
  greeterFn();
}

greeter(() => console.log("Hi"));
*/
/* 
function init() {
  function greet() {
    console.log("Hi");
  }

  greet();
}

greet();
*/

/* let userMessage = "Hello";
userMessage = userMessage.concat("!!!");
*/

const message = "Hello";

const hobbies = ["Sports", "Cooking"];
hobbies.push("Working");

console.log(hobbies);
