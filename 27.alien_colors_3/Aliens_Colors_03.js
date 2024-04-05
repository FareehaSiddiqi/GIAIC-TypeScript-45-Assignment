"use strict";
// Version01
let alienColor = "green";
// If the alien is green, print a message that the player earned 5 points. 
if (alienColor === 'green') {
    console.log("Player Just earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("Player Just earned 10 points."); //If the alien is yellow, print a message that the player earned 10 points. 
}
else if (alienColor === 'red') {
    console.log("Player Just earned 15 points.");
} // If the alien is red, print a message that the player earned 15 points. 
// •	Write three versions of this program, making sure each message is printed for the appropriate color alien. 
// Version 02
alienColor = "yellow";
if (alienColor === 'green') {
    console.log("Player Just earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("Player Just earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("Player Just earned 15 points.");
}
// Version 03
alienColor = "red";
if (alienColor === 'green') {
    console.log("Player Just earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("Player Just earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("Player Just earned 15 points.");
}
