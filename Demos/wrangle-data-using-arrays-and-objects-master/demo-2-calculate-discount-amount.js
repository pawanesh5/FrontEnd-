/* Optional:: Mentor may refer to demo-pre-2.js to demonstrate creation of product list */

/* Perform Array Operations */



// USING FOR LOOP


const products = [['Gucci Round Bucklet Belt', 300],['Gucci Round Bucklet Belt', 300],['Smiley T-Shirt', 50],['Smiley T-Shirt', 50],['Shinie Nail Paint', 10]];

// [​['Gucci Round Bucklet Belt', 300]​,['Gucci Round Bucklet Belt', 300]​,['Smiley T-Shirt', 50]​,['Smiley T-Shirt', 50]​,['Shinie Nail Paint', 10]]

const calculateDiscountedPrice = (discount)=>{
    for(let i=0;i<products.length;i++){
        products[i][1] = products[i][1] - products[i][1]*discount/100;
    }
}

calculateDiscountedPrice(10);

// console.log(discountedPrices);
console.log(products);

// **************************************************** 
// **************************************************** 

// USING ARRAY FUNCTIONS

const products = [['Gucci Round Bucklet Belt', 300],['Gucci Round Bucklet Belt', 300],['Smiley T-Shirt', 50],['Smiley T-Shirt', 50],['Shinie Nail Paint', 10]];

const calculateDiscountedPrice = discount => products.map(product=>
    [product[0],product[1] - product[1]*discount/100]
);


let discountedPrices = calculateDiscountedPrice(10);

console.log(discountedPrices);
console.log(products);