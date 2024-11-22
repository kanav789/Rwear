const TeenGuy = () => async (req, res) => {
  try {
    let teenguy = await postModel.find({ type: "teenguy" }).exec();

    if (teenguy) {
      res.status(200).json({ message: "Products", teenguy });
    }
  } catch (error) {
    res.send(error).status(404).json({ error: "Error in Fetching Product" });
  }
};
module.exports = TeenGuy;
