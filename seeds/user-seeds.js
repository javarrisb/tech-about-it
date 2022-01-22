const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'deadpool',
        email: 'dpool@gmail.com',
        password: 'password123'
    },
    {
        username: 'spiderman',
        email: 'spider@gmail.com',
        password: 'password123'
    },
    {
        username: 'wonderwoman',
        email: 'wonder@gmail.com',
        password: 'password123'
    },
    {
        username: 'hulk',
        email: 'hulk@gmail.com',
        password: 'password123'
    },
    {
        username: 'blackpanther',
        email: 'panther@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;