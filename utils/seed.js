const connection = require('../config/connection');
const { User, Thought} = require('../models');
const {users, thoughts, reactions} = require('./data');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.log('Data seeded')
    process.exit(0);
})
