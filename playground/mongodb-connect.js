//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

var user = {name:'andrew', age:25};
var {name} = user; //ES6 destructure name = user.name;
console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db) => {
    if (error) {
         console.log('Unable to connect to MongoDB server');
         return;
    }

    console.log('Connected to MongoDB server');


    // db.collection('Todos').insertOne({
    //     text: 'Something for the weekend',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert TODO ', error);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     text: 'Kiwi',
    //     age: 120,
    //     location: 'Anus der Welt'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user', error)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});