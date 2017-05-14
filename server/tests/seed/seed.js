const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
    _id: userOneId,
    email: 'andrew@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access:'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'jen@example.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access:'auth'}, 'abc123').toString()
    }]
}]

const todos = [{
    text: 'Forst test todo',
    _id: new ObjectId(),
    _creator: userOneId
}, {
    text: 'Second test todo',
    _id: new ObjectId(),
    _creator: userTwoId,
    completed: true,
    completedAt: 3
}]

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};