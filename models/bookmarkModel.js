// const mongoose = require("mongoose")


// const bookmarkSchema = new mongoose.Schema(
//     {
//         post: {
//             type: Array
//         }
//     }
// )

// const bookmarkInfo = mongoose.model('bookmark', bookmarkSchema);

// module.exports = bookmarkInfo;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const bookmarkSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  bookmark: [{
    type: ObjectId,
    ref: 'Story' // This refers to the 'posts' collection
  }]
});

const BookmarkInfo = mongoose.model('Bookmark', bookmarkSchema);

module.exports = BookmarkInfo;
