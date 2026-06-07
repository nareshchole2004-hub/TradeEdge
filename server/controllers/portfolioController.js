const Portfolio = require("../models/Portfolio");

const getPortfolio = async (req, res) => {
  try {

    const portfolio = await Portfolio.findOne({
      userId: req.user.id,
    });

    if (!portfolio) {
      return res.status(404).json({
        message: "Portfolio not found",
      });
    }

    res.status(200).json(portfolio);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getPortfolio,
};