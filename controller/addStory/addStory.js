const storyInfo = require("../../models/storyModel.js")

const storyData = async (req, res) => {

    const { posts,userId } = req.body;

    // console.log(req.body);

    const data = await storyInfo.create({posts,userId});
    console.log(data);
    res.status(200).send(data);
}



module.exports = storyData;   