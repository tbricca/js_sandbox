
// // string 
// const name = "John Doe" 

// const age = 45;

// console.log(typeof age);


// // conversions 
// let val; 

// val = 5;

// console.log(val);

////////// NUMBERS & THE MATH OBJECT ////////////////////
const num1 = 100;
const num2 = 50;
let val; 

val = num1 + num2

console.log(val);

val = Math.PI 
= 3.14 

// - Math is an object - it has properties and methods
// Property is an attribute 
// Method is a function 
// MATH FUNCTIONALITY
math.round(2.4) = 2 
math.ceil(2.4) - rounds up = 3 
math.floor (2.8) = rounds down = 2 

math.abs(-3) - gives the absolute (positive) number for it 
math.pow(8, 2) = 64 
math.min(2,33,14,55) = will return the minimum number
math.max - will return the maximum number 
// RANDOMIZE Number 
val = math.floor (math.random()* 20 + 1)

const firstName = 'William'
const lastName = 'Johnson'

let val;

val = firstName + lastName 
//////////// STRING METHODS & CONCATENATION //////////////////// 
val = firstName + '' + lastName; 

// Append - add on to a variable 
val = 'Brad ' //space is coming from here
val += 'Traversy' // having the addition sign here to add it

val = 'Hello my name is ' = firstName = 'and I am ' + age;

//Escaping
val = 'That\'s awesomem I can\'t wait' // adding backslash to allow you to properly write a sentance

// Length 
val = firstName.length // equals 7 

// Concat()
val = firstName.concat('',lastName);
// = William Johnson

// Change case 
val = firstName.toUpperCase();
val=firstName.toLowerCase();

// Takingthe index
val = firstName[0]

// indexOf()
val = firtName.indexOf('l') // starts from the begginning and finds where the firt l is in the string 
val =firstName.lastIndexOf(l);

// charAT()
firstName.charAt('2'); // the character at 2 position in the string

// Get last character 
val .firstName.charAt(firstName.length - 1); // will always give the ast character 

// substring()
val = firstName.substring(0, 4) //equals Will 

//slice()
val = firstName.slice(0, 4)
console.log(val);

//split() - split a string into an array based on a seperator
const str ="Hello my name is"
val = str.split (''); // split it at the spaces 

// usful for tags 
tags = 'web design, tech, javascript';
val = tags.split (',');

// replace()
val str.replace('bard', 'jack');

// include()
val = str.includes ('foo') // sees if this inside the stirng 

// template literals ES16

/////// TEMPLATE LITERALS ///////////////////////////////////
const name = 'John'; 
const age = 30;
const job = web developer
const city = 'Miami';
let html;

// Without template strings (es5)
//html string: 
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job ' + job + ' </li><li>City: ' + city +' </li></ul>';

document.body.innerHTML = html;
/// this makes the list w/ the name, age, job city 

function hello(){
    return 'hello';
}

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' + 
        '<li>City: ' + city +' </li>';

// With template strings (literals)     (ES6)
html = ` 
    <ul>
        <li><Name: ${name}</li>
        <li><Age: ${age}</li>
        <li><Job: ${job}</li>
        <li><City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;
// this uses a backtick instead of quotations

/// ARRAYS AND ARRAY METHODS //////////////////////////////////
const numbers = [43,56,33,23,44,36,4];
const numbers2 = new Array(22,45,33,76,54);
const fruit ['Apple', 'Banana', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null {a:1, b:1}, new Date()];

// console.log(mixed);

let val;

console.log(numbers);
console.log(val); // = undefined at the moment

// Get Array length
val = numbers.length
// Check if its an array 
val = Array.isArray(numbers);
// Get single value 
val = numbers(3);
val = numbers(0);
//insert into Array
numbers[2] = 100;
// Find index of value 
val = umbers.indexOf(36);

// MUTATING ARRAYS
// Add onto end of an Array
numbers.push(250);
// Add on front of an array 
numbers.unshift(120);
// Take off from the end
numbers.pop();
// take off from the front 
numbers.shift();
// Splice out values - where you start removing and where end removing 
numbers.split(1,3)
// Reverse 
numbers.reverse();

// Concatenate array 
val = numbers.concat(numbers2);

// Sorting Arrays - numerical order
val = fruit.sort();
val = numbers.sort();

// Use the 'compare function'
val = numbers.sort(function(x,y){
    return x - y;
});

// Find 
function.under50(num){
    return num < 50;
}

val = numbers.find(under50);


///////// OBJECT LITERALS //////////////////////
    
//////////////////////  OBJECT LITERALS /////////// /////////// /////////// 
const person = {
    this is an object literal 
}

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'rap battles'],
    // imbedded object
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        // when your inside an object you need to use this, it pertains to the object 
        return 2017 - this.age;
    }
}

let val; 

val = person;

console.log(val);

// get specific value 
val = person;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.address[1];
val = person.hobbies[1];

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];
// We can loop through it

for(let i = 0; i < people.length; i++){
// as long as i is the length of the array, 
// increment i through each iteration 
    console.log(people[i].name);
// of people, the current iteration (i) and print the name
}

/////////// DATES & TIMES /////////////////////////////////

let val; 

const today = new Date();

console.log(val);
/// this will display today's date 
/// Date is a reference type which is an object 

let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981 11:25:00');
birthday = new Date('9/10/1981');

val = today.getMonth()
// will display the month but remember that it is 0 based so november is 10
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getSeconds();
val = today.getTime() 
// getting a timestamp
// to change it 
birthday.setMonth(2);
birthday.setDate(12);

console.log(val);


/////////// IF STATEMENTS & COMPARISON OPERATORS ///////////
// Used to evaluate some kind of condition and do something based on that condition
// or if that condition isn't met 
if (something){ 
    do something
} else {
    do something else   
}

const id = 100;

// EQUAL TO 
if (id == 100){
    // The double equals means it is comparing this to this
    console.log('CORRECT');
// if this the only thing it will just show correct or nothing 
}

if (id == 101){
    // The double equals means it is comparing this to this
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

/// NOT EQUAL TO /// 

if (id != 101){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Most times you want to test the value and the type 
// DO THIS USING 3 EQUAL SIGN 
// EQUAL TO VALUE & TYPE 
if (id === 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

/// NOT EQUAL TO VALUE OR TYPE
if (id !== 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Test if undefined 

if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}` );
} else {
    console.log('No ID');
}

const color = 'red';

if(color === 'red'){
    console.log('color is red');
} else if(color === 'blue'){
    console.log('color is blue');
} else {
    console.log('color is not blue or red')
}

// LOGISTCAL OPERATORSA

const name = 'Tony';
const age = 20;

if(age > 0 && age < 12){
    console.log(`${name}is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name}is a teenager`);
} else {
    console.log(`${name} is an adult`);
}



