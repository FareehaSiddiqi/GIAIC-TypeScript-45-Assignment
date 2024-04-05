// 21.Write a program that creates Objects containing these items. 
// let person_Name :string = 'Taniya';
// agar is array main ek se zyaada name store krwaney hain.tou hum last exercise ki tarha ek se zyada store karwayengy tou hum pheley array banyengy or usko const ki traha use karengy na ke let yani ab change nhi hoga bahd main . java scrpt main var as a variable use hota hai ab yh bad practice hai/
// const personName_Array :string[] = ['Taniya', 'Bilal', 'Younus'];
// agar main ek name hata kr main number add karwao const array main or string hoga na k number tou ab yh kesey add karweao ab is key liye hum is string ko round bracket main rakh kar or ka sign klagaonga | or mention krengy yh k ab yeh string ya number higa 
// const personName_Array :(string | number)[] = ['Taniya', 'Bilal', '3'];
// const personName_Array :(string | number)[] = ['Person', 'car', 'pizza'];
// q k ab humien malom hai is person ki koi characteristiscs hongy tou usko add krwaney k liye hum ab obejct add krwayengy let person = { enter press krengy}, har preperty k badh comma lagana zaroori hai
interface person {
    age : number, 
    name : string, 
    nationality : string,
    Student : Boolean
  
} 
// error nhi deraha q k equal ka sign nhi laga jab lagega equal to ka sign tou error ayega
 // is ko hum key value pair hai , hum or agar hum aisa karein k age ko hum string ki sahakl main likhey phir hum kiya karein obejct k sari propertire k data type ko define karengy jo interface main define ho 
let person :person = {
        age : 5, 
        name : 'Taniya', 
        nationality : 'Pakistani',
        Student : true
        
    }
//  now we are able to create object and unerstand it little bit
console.log(person); 

// yeh print karwayega person ki properties 
// car object
interface car {
    maker : string,
    color : string
    automatic : Boolean
  
} 

let car = { 
    maker : 'Honda',
    color : 'White',
    automatic : true
}

console.log(car);