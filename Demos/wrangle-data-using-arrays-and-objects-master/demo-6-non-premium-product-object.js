/* Perform Operations on Complex Data Structures */

const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Smiley T-Shirt',
        price: 500
    },
    {
        productName: 'Smiley T-Shirt',
        price: 50
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];
//[{},{},{},{}].....[[],[],[]]
let nonPremiumProducts_map = products.filter(p => p.price <= 300).map(p => {
        return {
            "productName": p.productName,
            "price": p.price
        }
    });
console.log(nonPremiumProducts_map);
const reducer=(stocks, product) => {
    let productIndex = stocks.map(s => s.productName).indexOf(product.productName);
    if (productIndex >= 0) {
        stocks[productIndex].stock+=1;
    }
    else
        stocks.push({
            "productName": product.productName,
            "stock": 1
        })
    return stocks;
};
let nonPremiumProducts= nonPremiumProducts_map.reduce(reducer, []);
console.log("Final Result");
console.log(nonPremiumProducts)