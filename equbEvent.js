const mongoose = require("mongoose");

const equbEventSchema = new mongoose.Schema(
  {
    event_id: { type: String, required: true, unique: true },
    group_id: { type: String, ref: "EqubGroup", required: true },
    event_type: {
      type: String,
      enum: ["contribution_deadline", "draw_date", "payout", "cycle_start"],
      required: true,
    },
    event_date: { type: Date, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["upcoming", "completed", "cancelled"],
      default: "upcoming",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EqubEvent", equbEventSchema);
