const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db) => {
    if (error) {
         console.log('Unable to connect to MongoDB server');
         return;
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat munch'
    // }).then((result) => {
    //     console.log(result);
    // })

    // //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat munch'
    // }).then((results) => {
    //     console.log(results);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     text: "Kiwi"
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId("5913332925b4410efce3f38d")
    }).then((result ) =>{
        console.log(result);
    })    

    //db.close();
});