const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'ut aliquam purus sit amet',
        post_id: 1,
        user_id: 3
    },
    {
        comment_text: 'dignissim diam quis enim lobortis scelerisque',
        post_id: 2,
        user_id: 5
    },
    {
        comment_text: 'in hac habitasse platea dictumst quisque sagittis purus',
        post_id: 3,
        user_id: 1
    },
    {
        comment_text: 'pharetra sit amet aliquam',
        post_id: 5,
        user_id: 4
    },
    {
        comment_text: 'posuere lorem ipsum dolor sit amet consectetur adipiscing elit',
        post_id: 4,
        user_id: 3
    },
    {
        comment_text: 'fermentum et sollicitudin ac orci phasellus egestas',
        post_id: 1,
        user_id: 2
    },
    {
        comment_text: 'tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero',
        post_id: 2,
        user_id: 3
    },
    {
        comment_text: 'ultrices neque ornare aenean',
        post_id: 5,
        user_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exporrts = seedComments;