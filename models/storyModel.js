const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    posts: {
        type: Array,
    },
    userId: {
        type: String,
    }
});
// const storyArray = new mongoose.Schema({                //Schema of the array that will be stored..
//     data: {
//         type: [storySchema],
//         required: true
//     }
// });

const storyInfo = mongoose.model('Story', storySchema);

module.exports = storyInfo;

