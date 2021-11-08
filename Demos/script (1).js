// Demo on using Promise.all() for making multiple API calls for aggregated results
// Fetching Boards' data for TaskBoard Renderer asynchronously using set of promises


// Setup required for demo execution
// 1. json-server should be running to fetch data from db.json file
// 2. command to run json-server : `json-server -w db.json`
// 3. this is the only file to be modified for building solution


import { transform } from './transformer.js';
import boardRenderer from './board-renderer.js';

let taskData = {}; //this variable will hold complete boards' data

const makeAPICall = url => {
    return axios(url);
};

// makeAPICall('http://localhost:3000/boards')
//     .then(response => {
       
//         taskData.boards = response.data;
//         return makeAPICall('http://localhost:3000/cards');
//     })
//     .then(response => {
//         taskData.cards = response.data;
//         return makeAPICall('http://localhost:3000/comments');
//     })
//     .then(response => {
//         console.log("Response data");
//         console.log(response);
//         taskData.comments = response.data;
//         boardRenderer(transform(taskData)[0]);
//     })
//     .catch(err => {
//         console.log(err);
//     });



//-------promise all------------    
let boardPromise = makeAPICall('http://localhost:3000/boards');
let listPromise = makeAPICall('http://localhost:3000/lists');
let cardPromise = makeAPICall('http://localhost:3000/cards');
let commentPromise = makeAPICall('http://localhost:3000/comments');

let promises = [];
promises.push(boardPromise);
promises.push(listPromise);
promises.push(cardPromise);
promises.push(commentPromise);

Promise.all(promises)
    .then(responses => {
        let taskBoardComponents = ['boards', 'lists', 'cards', 'comments'];
        let aggregatedResults = {};
        let count=0;
        let responseValues = responses.map((response, index) => {
            count++;
            console.log("Iteration number"+count);
            console.log("Value of index "+index);
            aggregatedResults[taskBoardComponents[index]] = response.data.length;
            return aggregatedResults;
        });

        console.log(aggregatedResults);
    })
    .catch(error => {
        console.log(error);
    });



