const productNames = 'p1,p2,p3';
const productPrices = '1,2,3';

const products = [];

const names = productNames.split(',');
const prices = productNames.split(',');

for(let i = 0; i<names.length ; i++){
    const product = [];
    product.push(names[i]);
    product.push(prices[i]);
    products.push(product);
}

console.log(products)
