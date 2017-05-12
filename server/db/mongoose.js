var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //mongoose with E6 Promises
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};