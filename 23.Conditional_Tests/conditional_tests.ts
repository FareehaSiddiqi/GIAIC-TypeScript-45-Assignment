// // Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this: 
// let car = 'subaru'; 
// console.log("Is car == 'subaru'? I predict True.") console.log(car == 'subaru') 
// •	Look closely at your results, and make sure you understand why each line evaluates to True or False. 
// •	Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. 

let car = 'Royal_Royce'; 


//test no 1
console.log("Is car == 'Royal_Royce'? I predict True.");
console.log(car === 'Royal_Royce');

//test no 2
console.log("Is car == 'Royal_Royce'? I predict True.");
console.log(car == 'Royal_Royce');

//test no 3
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

// //test no 4
console.log("Is car !== 'Ford'? I predict True.");
console.log(car !== 'Ford');



// //test no 5
console.log("Is car.Upper case == 'ROYAL_ROYCE'? I predict True.");
console.log(car.toUpperCase() == 'ROYAL_ROYCE');


// yeh false waley hain

// //test no 6
console.log("Is car.Lower case  == 'ROYAL_ROYCE'? I predict False.");
console.log(car.toLowerCase() == 'ROYAL_ROYCE');

// //test no 7
console.log("Is car === 'ROYAL_ROYCE'? I predict False.");
console.log(car === 'ROYAL_ROYCE');

// //test no 8
console.log("Is car === 'Train'? I predict False.");
console.log(car === 'Train');

// //test no 9
console.log("Is car === 'bus'? I predict False.");
console.log(car === 'bus');

// //test no 10
console.log("Is car === 'Bike'? I predict False.");
console.log(car === 'Bike');

// npm install -g ts-node-dev is se bar bar tsc nhi karna hoga direct node kar ke check karengy.  sarey changes tehn auto compilation k liye likehngy ts-node-dev file name or close vs code after installation
// ts-node-dev conditional_tests.ts yeh ab upper arrow key se cmd maon likh sakhengy




// single equal value ko assign karney ke liye ya set karney k liye 
// == value ko check karety hain 
// === datatype ke sath value ko check kar rahy hain
// ! yeh hota hai not or != not equal hai.
//  2 != 2 true
