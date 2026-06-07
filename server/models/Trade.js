const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    symbol: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    buyPrice: {
      type: Number,
      required: true,
    },

    currentPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["OPEN", "CLOSED"],
      default: "OPEN",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trade", tradeSchema);