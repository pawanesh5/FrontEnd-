/* Chaining Array Functions */

const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 500],
    ['Smiley T-Shirt', 50],
    ['Shinie Nail Paint', 100],
    ['Shinie Nail Paint', 250],
    ['Esbeda Wallet', 250]
];
console.log(products);

// let nonPremiumProducts = products.filter(p => p[1] > 300)
//     .map(p => [p[0], p[1] - p[1] * .15]);

// console.log(nonPremiumProducts)


let nonPremiumProductStock = products.filter(p => p[1] <= 300)
    .map(p => [p[0], p[1] - p[1] * .15])
    .reduce((stocks, product) => {
        let productIndex = stocks.map(s => s[0]).indexOf(product[0]);
        if (productIndex >= 0) {
            stocks[productIndex] = [product[0], ++stocks[productIndex][1]]
        }
        else
            stocks.push([product[0], 1]);
        return stocks;
    }, []);

console.log(nonPremiumProductStock);