// Q:38
function cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
cities();
cities("Lahore");
cities("Swat");
cities("Quetta");
cities("Delhi", "India");
cities("London", "UK");
cities("Paris", "France");
cities("Berlin", "Greece");
cities("Kiev", "UKraine");
cities("Colombo", "Sri Lanka");
