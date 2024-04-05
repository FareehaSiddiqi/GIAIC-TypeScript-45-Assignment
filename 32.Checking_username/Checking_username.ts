//Create a program that simulates how websites ensure that everyone has a unique username. 

// Make a list of five or more usernames called current_users. 
let current_user : string[] = ["FareEha","MuNeeb","AsAd","FahAd", "HumA"]

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list. 
let new_user: string[] = ["FareEha", "Saba", "UsamA", "Admin", "BiLal"]

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available. 
// Make sure your comparison is "case insensitive". If 'John' has been used, 'JOHN' should not be accepted. 
// .include check all value in array present in ()
// .tolowercase apply only to string not on array now use .map which convert array behaviour to string
// .foreach must have array which needs to be checked, since its a method apply ()
// new parameter for checking current user value comparision
// it turns into array function  by applying => 
new_user.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase) )
{
    console.log(`The user name ${newUsername} is not available. Please write a different username. `);
}else{
    console.log( `The usename ${newUsername} is available`);
}
}) 
   
   
