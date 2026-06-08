const Trade = require("../models/Trade");
const Portfolio = require("../models/Portfolio");

const buyTrade = async (req, res) => {
  try {
    const { symbol, quantity, buyPrice } = req.body;

    const totalCost = quantity * buyPrice;

    const portfolio = await Portfolio.findOne({
      userId: req.user.id,
    });

    if (!portfolio) {
      return res.status(404).json({
        message: "Portfolio not found",
      });
    }

    if (portfolio.balance < totalCost) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    portfolio.balance -= totalCost;
    portfolio.investedAmount += totalCost;

    await portfolio.save();

    const trade = await Trade.create({
      userId: req.user.id,
      symbol,
      quantity,
      buyPrice,
      currentPrice: buyPrice,
    });

    res.status(201).json({
      message: "Trade Created Successfully",
      trade,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyTrades = async (req, res) => {
  try {
    const trades = await Trade.find({
      userId: req.user.id,
    });

    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const sellTrade = async (req, res) => {
  try {
    const { tradeId, sellPrice } = req.body;

    const trade = await Trade.findById(tradeId);

    if (!trade) {
      return res.status(404).json({
        message: "Trade not found",
      });
    }

    if (trade.status === "CLOSED") {
      return res.status(400).json({
        message: "Trade already closed",
      });
    }

    const portfolio = await Portfolio.findOne({
      userId: req.user.id,
    });

    const saleValue = trade.quantity * sellPrice;

    const investedValue = trade.quantity * trade.buyPrice;

    const profitLoss = saleValue - investedValue;

    portfolio.balance += saleValue;

    portfolio.investedAmount -= investedValue;

    portfolio.totalPnL += profitLoss;

    await portfolio.save();

    trade.sellPrice = sellPrice;

    trade.currentPrice = sellPrice;

    trade.realizedPnL = profitLoss;

    trade.status = "CLOSED";

    await trade.save();

    res.status(200).json({
      message: "Trade Closed Successfully",
      profitLoss,
      trade,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  buyTrade,
  getMyTrades,
  sellTrade,
};
