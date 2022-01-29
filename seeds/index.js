const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('-------------');

    await seedComments();
    console.log('---------------');

    await seedPosts();
    console.log('-----------');

    await seedUsers();
    console.log('-------------');

    process.exit(0);
};

seedAll();