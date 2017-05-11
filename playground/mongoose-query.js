const {ObjectID} = require('mongodb');

const {moongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5914254e55666cd818fda258';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos',todos);
// })

// Todo.findOne({
//    _id:id 
// }).then((todo) =>{
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) =>{
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e))

var id = "59136339274cc1e415a1d57a";

User.findById(id)
.then((user) => {
    if (!user) {
        return console.log("No user with the id ", id);
    }
    console.log("User", JSON.stringify(user));
}, (err) => {
 console.log("Error", err)
});
//.catch((e) => {
//    console.log(e);
//});