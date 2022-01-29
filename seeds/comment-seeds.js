const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'ut aliquam purus sit amet',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'dignissim diam quis enim lobortis scelerisque',
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: 'in hac habitasse platea dictumst quisque sagittis purus',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'pharetra sit amet aliquam',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'posuere lorem ipsum dolor sit amet consectetur adipiscing elit',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'fermentum et sollicitudin ac orci phasellus egestas',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'ultrices neque ornare aenean',
        user_id: 5,
        post_id: 2
    }
];


const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;