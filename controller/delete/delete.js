const storyInfo = require("../../models/storyModel.js");


const delData = async (req, res) => {

    const id = req.query.id;

    const ans = await storyInfo.findByIdAndDelete({ _id: id });
    res.status(200).send(ans);
}


module.exports = delData;