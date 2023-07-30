const storyInfo = require("../../models/storyModel.js")

const storyData = async (req, res) => {

    const { posts,userId } = req.body;

    const data = await storyInfo.create({posts,userId});
    res.status(200).send(data);
}



module.exports = storyData;   