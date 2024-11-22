const postModel = require("../../Models/PostModel.js");
const WomenProduct = async (req, res) => {
  try {
    let women = await postModel.find({ type: "women" }).exec();
    if (women) {
      res.status(200).json({ message: "Products", women });
    }
  } catch (error) {
    res
      .send(error)
      .status(404)
      .json({ error: "Error in Fetching The Product" });
  }
};
module.exports = WomenProduct;
