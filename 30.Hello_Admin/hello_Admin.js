"use strict";
// in line 29 change it from rootDir: "./" to "rootDir": "./src",      and also line 58  change outDir": "./", to  "outDir": "./dist",                           
//  then sourcecode src means noe go to new folder write src and write click on src folder to generate ts file  
// 
// •	If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report? 
// •	Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. 
// array of five or more usernames,
let userNames = ["Admin", "Fahad", "Asad", "Huma", "Muneeb"];
userNames.forEach(userNames => {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});
