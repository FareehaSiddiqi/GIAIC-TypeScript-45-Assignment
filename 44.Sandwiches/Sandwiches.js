"use strict";
//Q:44 Sandwiches
function make_sandwich(...item) {
    console.log(`Making a sandwich with: ${item.join(', ')}.`);
}
make_sandwich("chicken", "cheese");
make_sandwich("deli meat", "lettuce", "tomato");
make_sandwich("mayonnaise", "mustard", "Olives", "Avocado");
make_sandwich("beef", "cheese");
make_sandwich("Cucumber", "lettuce", "tomato");
make_sandwich("mayonnaise", "cucumber", "Olives", "Avocado");
make_sandwich("Mutton", "cheese");
make_sandwich("beef meat", "lettuce", "mustard");
make_sandwich("mayonnaise", "jalapeno", "Olives", "Avocado");
