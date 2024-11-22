const postModel = require("../../Models/PostModel.js");
const MensProduct = async (req, res) => {
  try {
    let mens = await postModel.find({ type: "men" }).exec();
    if (mens) {
      res.status(200).json({ message: "Products", mens });
    }
  } catch (error) {
    res.send(error).status(404);
  }
};
module.exports = MensProduct;
