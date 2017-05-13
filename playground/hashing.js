const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var data = {
    id: 4
};

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$x/Uncv.avzOaAHF19z3dReNC7pZHMeE/LtfOfGyr.KKasY87GaICW';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

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