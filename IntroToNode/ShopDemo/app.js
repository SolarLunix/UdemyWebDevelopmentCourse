var data = require("faker");

console.log("\tWelcome to the Shop \n----------------------------------------");

for(var i = 1; i <= 10; i++){
    var product = data.commerce.productName();
    var price = data.commerce.price();
    
    console.log(i + ":\t$" + price + "\t" + product);
}