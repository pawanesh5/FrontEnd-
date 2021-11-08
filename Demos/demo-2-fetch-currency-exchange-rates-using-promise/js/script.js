// Demo on using Promises for Asynchronous Execution
// Fetching Currency Rates from external API asynchronously using Promise 


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Currency Exchange Rates</h1>`;

//axios making get request to fetch currency rates
let promise = axios('https://api.ratesapi.io/api/latest');

//executing promise
promise
  //calling then() with success handler
  .then(response => {
    let responseData = response.data;

    //updating DOM with fetched rates
    
    appDiv.innerHTML += `<h2>Base Currency : ${responseData.base}`;

    appDiv.innerHTML += '<ul>';

    let currencyRates = Object.entries(responseData.rates);
    
    currencyRates.forEach(rate => {
      appDiv.innerHTML += `<li>1 ${responseData.base} = ${rate[1]} ${
        rate[0]
      }</li>`;
    });
    appDiv.innerHTML += '</ul>';
  })
  //calling catch() with error handler
  .catch(err => {
    appDiv.innerHTML += err.message;
  });
