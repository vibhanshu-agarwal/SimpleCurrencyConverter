// You can experiment here, it won’t be checked
const products = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49
};
function getProductPrices(products) {
    return Object.
    entries
    (products).
    map
    (([product, price]) => {
        return `${
            product
        }: $${
            price
        }`;
    }).join('\n');
}
const prices = getProductPrices(products);
console.log(prices);
