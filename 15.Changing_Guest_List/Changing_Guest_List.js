"use strict";
let Guest_List = ['Fareeha', 'Huma', 'Asad'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr./Ms. ' + Guest_List[i] + '\n\n It is our pleasure to invite you at the party. \n\n Thank You!');
}
let absent_Guest = 'Fareeha';
let new_guest = 'Ahmed';
Guest_List[0] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr./Ms. ' + Guest_List[i] + '\n\n It is our pleasure to invite you at the party. \n\n Thank You!');
}
console.log(`${absent_Guest} is not coming to the party.`);
