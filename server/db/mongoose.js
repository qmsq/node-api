var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //mongoose with E6 Promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};