const storyInfo = require("../../models/storyModel.js");


const filterData = async (req, res) => {

    const catg = req.query.catg;

    if ((req.query.catg) === "All") {
        const data = await storyInfo.find();
        res.send(data);
    }
    else {
        const data = await storyInfo.find({
            posts: {
                $elemMatch: { category: catg }
            }
        })
        res.send(data);
    }
    // console.log(res.data);
}
module.exports = filterData;