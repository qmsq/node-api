const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 4
};


var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token , '123abc');
console.log('Decoded :',decoded);



// var message = 'I am the bestestes user';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}, Hash : ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'secret').toString()
// }

// data.id = 5;

// var resultHash = SHA256(JSON.stringify(token.data)+'secret').toString();
// console.log("Token hash :",token.hash);
// console.log("result Hash:", resultHash)
// if (resultHash === token.hash) {
//     console.log('Data was not changed')
// } else {
//     console.log('Data was changed. Dont trust');
// }