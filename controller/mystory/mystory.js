const storyInfo = require("../../models/storyModel.js")

const mystoryData = async (req, res) => {

    try {
        const userId = req.query.userId;

        const data = await storyInfo.find({
            userId: userId
        })
        res.status(200).send(data);
    } catch (error) {

    }
}


module.exports = mystoryData;