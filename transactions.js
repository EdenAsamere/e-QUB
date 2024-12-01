const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    transaction_id: { type: String, unique: true, required: true },
    amount: { type: Number, required: true },
    sender: { type: String, ref: "User", required: true },
    receiver: { type: String, ref: "User", required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
