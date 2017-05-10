var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //mongoose with E6 Promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
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
    text:'   Edit this video      '
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('Unable to save todo ',e)
});

//User
//email - required trim -type string min length 1
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var newUser = new User({
    email: ' at@ at. at  '
})

newUser.save().then((user) => {
    console.log("Saved user");
    console.log(user);
}, (error) => {
    console.log('Unable to save user ',error)
})

