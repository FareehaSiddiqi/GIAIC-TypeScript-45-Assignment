"use strict";
let personname = '';
personname = prompt('what is your name?') || '';
if (personname !== null && personname !== '') {
    alert(`Hello ${personname}, would you like some python today?`);
}
else {
    alert('you have to type your name!');
}
