const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message_id: { type: String, required: true, unique: true },
  group_id: { type: String, ref: "EqubGroup", required: true },
  sender_id: { type: String, ref: "User", required: true },
  message: { type: String, required: true },
  message_type: {
    type: String,
    enum: ["text", "image", "file"],
    default: "text",
  },
  attachments: [{ type: String }],
  timestamp: { type: Date, default: Date.now },
  is_read_by: [{ type: String, ref: "User" }],
  type: String,
  enum: ["active", "deleted"],
  default: "active",
});

module.exports = mongoose.model("Message", messageSchema);
