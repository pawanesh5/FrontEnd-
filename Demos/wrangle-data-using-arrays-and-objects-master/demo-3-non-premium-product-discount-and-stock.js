/* Using Array Functions */

const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 500],
    ['Smiley T-Shirt', 50],
    ['Shinie Nail Paint', 100],
    ['Shinie Nail Paint', 250],
    ['Esbeda Wallet',250]
];
//[[],[],[],[]]
//filter
let premiumProducts = products.filter(product => product[1] > 300)
// console.log("------premimum products-----")
// console.log(premiumProducts);

//discounted price

// const nonPremiumProducts_map = products.filter(product => product[1] <= 300);
// console.log("300 filter result");
// console.log(nonPremiumProducts_map);

// const nonPremiumProducts=nonPremiumProducts_map.map(product => [product[0], product[1] - product[1] * .15]);
// console.log("Non premium products");
// console.log(nonPremiumProducts);

const nonPremiumProducts=products.filter(product => product[1] <= 300)
.map(product => [product[0], product[1] - product[1] * .15]);
console.log("Non premium products");
console.log(nonPremiumProducts);

//all product stock 
i=0;
const reducer=(stocks, product) => {
    console.log("Started with new element of non premimum products array-->"+(++i));
    console.log("-----stock data-----");
    console.log(stocks);
    console.log("-----product data-------");
    console.log(product);
    let productIndex = stocks.map(s => s[0]).indexOf(product[0]);
    console.log("----------productIndex------");
    console.log(productIndex);

    if (productIndex >= 0) {
        stocks[productIndex] = [product[0], ++stocks[productIndex][1]]
    }
    else
        stocks.push([product[0], 1]);
    return stocks;
};
const productTypeStock = nonPremiumProducts.reduce(reducer,[])

console.log("Final Accumulated Result");
console.log(productTypeStock);