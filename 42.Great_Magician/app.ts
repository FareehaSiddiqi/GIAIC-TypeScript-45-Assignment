// Q:42
let mag_name: string[] = ["Harry Houdini", "Derren Brown", "Dynamo"];

function add_mag(mag_name: string[]) {
    mag_name.splice(3, 0, "The Great");
    console.log(mag_name);
}
add_mag(mag_name);