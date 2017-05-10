var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //mongoose with E6 Promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Chuck Dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// });

var newTodo = new Todo({
    text: 'Kill Shelf',
    completed: false,
    completedAt: 911
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('Unable to save todo')
});
