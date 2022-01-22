const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem ipsum dolor sit amet',
        post_content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        user_id: 1
    },
    {
        title: 'Agam elitr ea sed, quidam discere ius ad',
        post_content: ' Et eligendi splendide sit, fabellas similique ut sit. Ne movet vitae reformidans nec. Vis diceret deleniti scribentur et. Persius maluisset et quo, vix ridens alienum ne.',
        user_id: 3
    },
    {
        title: 'Graeco expetenda quo ea, quodsi malorum eos ne.',
        post_content: 'Liber doctus suavitate nec ne, noluisse mediocritatem at eam, harum tantas partiendo mei eu. Eu sea nisl munere, ea affert volutpat sit. ',
        user_id: 4
    },
    {
        title: 'Ei cum mollis debitis persecuti',
        post_content: ' Eu sea nisl munere, ea affert volutpat sit. Saperet probatus cu vim.',
        user_id: 2
    },
    {
        title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        post_content: 'Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;