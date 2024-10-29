// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here
console.log("Welcome to Currency Converter!");
//A Map of currency symbols and their exchange rates
const currencyExchangeRates = new Map([
    ["USD", 1.0],
    ["JPY", 113.50],
    ["EUR", 0.89],
    ["RUB", 74.36],
    ["GBP", 0.75],
]);

//For each key in Map print
for (let key of currencyExchangeRates.keys()) {
    console.log(`1 USD equals ${currencyExchangeRates.get(key)} ${key}`);
}

while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let choice = input();
    //choice must be either 1 or 2 if not print Unknown input and continue loop
    if (choice !== "1" && choice !== "2") {
        console.log("Unknown input");
        continue;
    }
    //exit the program
    if (choice === "2") {
        console.log("Have a nice day!");
        break;
    }

    while (true) {
        console.log("What do you want to convert?");
        let fromCurrency = input("From: ").toUpperCase();

        // If fromCurrency is not in the currencyExchangeRates map, print "Unknown currency"
        if (!currencyExchangeRates.has(fromCurrency)) {
            console.log("Unknown currency");
            continue;
        }

        let toCurrency = input("To: ").toUpperCase();

        // If toCurrency is not in the currencyExchangeRates map, print "Unknown currency"
        if (!currencyExchangeRates.has(toCurrency)) {
            console.log("Unknown currency");
            continue;
        }

        let amount = Number(input("Amount: "));

        // Amount cannot contain non-numeric chars
        if (isNaN(amount)) {
            console.log("The amount has to be a number");
            continue;
        }

        // Amount cannot be less than 1
        if (amount < 1) {
            console.log("The amount cannot be less than 1");
            continue;
        }

        // If all validations pass, break the loop and display the result
        let convertedAmount = amount * currencyExchangeRates.get(toCurrency) / currencyExchangeRates.get(fromCurrency);
        console.log(`Result: ${amount} ${fromCurrency} equals ${convertedAmount.toFixed(4)} ${toCurrency}`);
        break;
    }

}





