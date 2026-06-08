const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  buyTrade,
  getMyTrades,
  sellTrade,
} = require("../controllers/tradeController");

router.post("/buy", protect, buyTrade);
router.get("/", protect, getMyTrades);
router.post("/sell", protect, sellTrade);

module.exports = router;