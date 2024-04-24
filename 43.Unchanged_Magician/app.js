"use strict";
function make_great(magicians) {
    const greatMagicians = [...magicians];
    // Add "the Great" to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
function show_magicians_with_title(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansOriginal = ["Harry Houdini", "Raven The illusionist", "David Copperfield", "Professor Pestro", "Penn Jillette", "Teller"];
const greatMagicians = make_great(magiciansOriginal);
console.log("Original Magicians:");
show_magicians_with_title(magiciansOriginal);
console.log("\nGreat Magicians:");
show_magicians_with_title(greatMagicians);
