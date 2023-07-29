// Assuming you have the User model already defined
const BookmarkInfo = require('../../models/bookmarkModel.js');
const storyInfo = require("../../models/storyModel")

const addOrUpdateUser = async (req, res) => {
    try {

        const { uid, pid } = req.body;
        let user = await BookmarkInfo.findOne({ userId: uid });

        if (user) {


            const ans = await BookmarkInfo.findOneAndUpdate({ userId: uid }, { $push: { bookmark: pid } })
            res.status(200).json({ ans });
        } else {
            const userId = uid;
            const bookmark = [pid];
            const data = await BookmarkInfo.create({ userId, bookmark });
            res.status(200).json({ data });

        }
    } catch (error) {

        res.status(500).json({ error: 'An error occurred while adding or updating data in the database.' });
    }
}


const getUsersWithPosts = async (req, res) => {
    try {
        const uid = req.query.uid
        const usersWithPosts = await BookmarkInfo.findOne({ userId: uid }).populate('bookmark');
        res.status(200).send(usersWithPosts);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}

module.exports = {
    addOrUpdateUser,
    getUsersWithPosts
};
