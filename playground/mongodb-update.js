const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db) => {
    if (error) {
         console.log('Unable to connect to MongoDB server');
         return;
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId("5913359150cb8a0db99187c7")
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        text: "Wiki"
    }, {
        $set: {
            text: "kiwiwiki"
        },
        $inc: {
            age: -90
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    //db.close();
});