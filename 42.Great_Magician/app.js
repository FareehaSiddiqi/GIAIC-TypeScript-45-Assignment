// Q:42
var mag_name = ["Harry Houdini", "Derren Brown", "Dynamo"];
function add_mag(mag_name) {
    mag_name.splice(3, 0, "The Great");
    console.log(mag_name);
}
add_mag(mag_name);
