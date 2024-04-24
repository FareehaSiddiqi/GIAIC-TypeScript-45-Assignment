"use strict";
//Q:45 Car
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
console.log(make_car("Toyota", "4Runner", ["color", "silver"], ["year", 2020]));
console.log(make_car("Ford", "Mustang", ["color", "maroon"], ["sunroof", true]));