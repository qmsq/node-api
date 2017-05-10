const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db) => {
    if (error) {
         console.log('Unable to connect to MongoDB server');
         return;
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectId('5913359150cb8a0db99187c7')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('unable to fetch todos',err)
    // })

    // db.collection('Todos').find({
    //     _id: new ObjectId('5913359150cb8a0db99187c7')
    // }).count().then((counts) => {
    //     console.log('Todos');
    //     console.log(`Todos-Count: ${counts}`);
    // }, (err) => {
    //     console.log('unable to fetch todos',err)
    // })

      db.collection('Users').find({
        text: 'Kiwi'
    }).count().then((counts) => {
        console.log('Kiwi');
        console.log(`Kiwis-Count: ${counts}`);
    }, (err) => {
        console.log('unable to fetch users',err)
    })

    //db.close();
});