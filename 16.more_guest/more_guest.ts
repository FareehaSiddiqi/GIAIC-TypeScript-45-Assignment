

let Guest_List :string[] = ['Fareeha','Huma','Asad'] ;


// for(let i=0; i<Guest_List.length; i++){
    
//     console.log('Dear Mr./Ms. ' + Guest_List[i] + '\n\n It is our pleasure to invite you at the party. \n\n Thank You!');
// }

let absent_Guest :string = 'Fareeha' ;

let new_guest :string = 'Ahmed' ;

Guest_List[0] = new_guest ;

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Dear Mr./Ms. ' + Guest_List[i] + '\n\n It is our pleasure to invite you at the party. \n\n Thank You!');
}

console.log(`${absent_Guest} is not coming to the party.`);


console.log('Good news! We find new table So we are inviting 3 more Guest_List.')
// round bracket allow to use method and function ko istimal kartahai and unshift se hum start main add karwaney chahey tou unshift use krty hn array maian
Guest_List.unshift('Iftikhar Ahmed Siddiqi') ;
// agar array k middle main jab new addition karn hai tou humein ab zero index per ifyokhar , 1st index per replacement and ab hum second index per add kareana hai tou hum splice ka use krty hn
// splice main 3 function hoty hn phela yh batata hai kun a index number, kiya kuch delete krna hai tou 0 agr karna hai tou 1 , phir hum sinle quotation lengy jo string k liye lety hn or name add kardengy or last main add krwaney ke liye push ka istimal krengy 


Guest_List.splice(2 , 0 , 'Aqeela');

Guest_List.push('Omer');

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Dear Mr./Ms. ' + Guest_List[i] + '\n\n It is our pleasure to invite you at the party. \n\n Thank You!');
}