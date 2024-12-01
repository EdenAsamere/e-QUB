const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  notification_id: { type: String, required: true, unique: true },
  user_id: { type: String, ref: "User", required: true },
  message: { type: String, required: true },
  notification_type: {
    type: String,
    enum: ["deadline", "payout", "reminder", "announcement"],
    required: true,
  },
  status: {
    type: String,
    enum: ["unread", "read"],
    default: "unread",
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
