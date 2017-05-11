const {ObjectID} = require('mongodb');

const {moongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove("5914c3678bf9044534dc017b").then((todo) => {
    console.log(todo);
})