const Portfolio = require("../models/Portfolio");
const Trade = require("../models/Trade");

const getDashboardSummary = async (req, res) => {
  try {

    const portfolio = await Portfolio.findOne({
      userId: req.user.id,
    });

    const trades = await Trade.find({
      userId: req.user.id,
    });

    const totalTrades = trades.length;

    const openTrades = trades.filter(
      (trade) => trade.status === "OPEN"
    ).length;

    const closedTrades = trades.filter(
      (trade) => trade.status === "CLOSED"
    ).length;

    res.status(200).json({
      balance: portfolio.balance,
      investedAmount: portfolio.investedAmount,
      totalPnL: portfolio.totalPnL,
      totalTrades,
      openTrades,
      closedTrades,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getDashboardSummary,
};