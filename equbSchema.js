const mongoose = require("mongoose");

const equbGroupSchema = new mongoose.Schema(
  {
    equb_id: { type: String, unique: true, required: true },
    group_name: { type: String, required: true },
    description: { type: String, required: true },
    payout_schedule: { type: Date, required: true },
    contribution_frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly"],
      required: true,
    },
    status: {
      type: String,
      enum: ["succesful", "failed"],
    },
    payout_schedule: { type: Date, required: true },
    members: [{ type: String, ref: "User", required: true }],
    completed_cycles: { type: String, default: 0, required: true },
    contract_address: { type: String },
    created_by: { type: String, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EqubGroup", equbGroupSchema);
