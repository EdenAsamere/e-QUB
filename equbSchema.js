const mongoose = require("mongoose");

const equbGroupSchema = new mongoose.Schema(
  {
    equb_id: { type: String, unique: true, required: true },
    group_name: { type: String, required: true },
    members: [{ type: String, ref: "User", required: true }],
    contribution_cycle: { type: String, required: true },
    contract_address: { type: String },
    created_by: { type: String, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EqubGroup", equbGroupSchema);
