const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  buyTrade,
  getMyTrades,
} = require("../controllers/tradeController");

router.post("/buy", protect, buyTrade);
router.get("/", protect, getMyTrades);

module.exports = router;