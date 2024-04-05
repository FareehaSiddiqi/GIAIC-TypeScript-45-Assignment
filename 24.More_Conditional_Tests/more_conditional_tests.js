"use strict";
// Equality and inequality test 1
console.log("Equality test with string; ", "Apple" === "Apple");
// Equality and inequality test 2
console.log("Inequality test with string; ", "Apple" != "Orange");
//Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality 
console.log("Equality test with number; ", 21 === 21);
//Numerical tests involving  inequality
console.log("Inequality test with number; ", 21 != 16);
//Greater than test
console.log("Greater than test: ", 21 > 16);
//Less than test
console.log("Less than test: ", 16 < 21);
// Greater than or equal to test 
console.log("Greater than or equal to test: ", 21 >= 21);
// Less than or equal to  test
console.log("Less than or equal to test: ", 16 <= 21);
// Tests using "and" operators , sab ko dena hoga 
console.log("And operators test: ", 16 === 16 && 21 > 16);
// Tests using "or" operators || pipe symbol, yeh ek bhi true hua tou true dega
console.log("And operators test: ", 16 === 16 || 21 > 16);
// Test whether an item is in an array 
const Vegetables = ['Cucumber', 'Tomato', 'Peas'];
console.log('Test "Cucumber" in the array:', Vegetables.includes("Cucumber"));
// •	Test whether an item is not in an array 
// console.log('Test "Turnip" in the array:', Vegetables.includes("Turnip")); is ka jawab falsehoga isliye hum ! sign use karengy
console.log('Test "Turnip" in the array:', !Vegetables.includes("Turnip"));
// npm install -g ts-node-dev is se bar bar tsc nhi karna hoga direct node kar ke check karengy.  sarey changes tehn auto compilation k liye likehngy ts-node-dev file name or close vs code after installation
// ts-node-dev conditional_tests.ts yeh ab upper arrow key se cmd maon likh sakhengy
// single equal value ko assign karney ke liye ya set karney k liye 
// == value ko check karety hain 
// === datatype ke sath value ko check kar rahy hain
// ! yeh hota hai not or != not equal hai.
//  2 != 2 true
// 
