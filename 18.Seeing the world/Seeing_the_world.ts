

let places :string[] = ['Azerbhaijan', 'Singapore', 'Paris', 'Australia', 'Switzerland'];

// print your array in its original order.
console.log('Original' + places);

// print your array in alphabetical order withut modifying the actual list.
console.log('copy' + [...places].sort());

// yeh oper waley 3 dot ki waje se ek copy bngayi hai jisko change karein without effecting original AARRAY

// show that your array is in its original order by printing it
console.log('Original' + places);

// print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());

// shshow that your array is in its original order by printing it again.
console.log('Original' + places);

// reverse the order of your list.print the array to show that its order has changed.
console.log('Original' + places.reverse());

// reverse the order of your list again .print the list to show that its back to its original order
console.log('Original' + places.reverse());
// yeh pheley seedhy ko ulta phir ulty ko seddha krdiya

// sort your array so its stored in alphabetical order. print the array to show that its order has been changed.
console.log('Original' + places.sort());

// sort to change your array so its stored in reverse alphabetical order. print the array to show that its order has been changed.
console.log('Original' + places.sort().reverse());