const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    profile_picture: { type: String },
    address: {
      country: { type: String, required: true },
      city: { type: String, required: true },
    },
    blockchain_wallet_address: { type: String, unique: true, required: true },
    contact_info: {
      email: { type: String, required: true },
      phone_number: { type: String, required: true },
    },
    role: {
      type: String,
      default: "user",
    },
    joined_groups: [{ type: String, ref: "Group" }],
    id_identification: {
      type: { type: String, required: true },
      number: { type: String, required: true },
      verified: { type: Boolean, default: false },
    },
    verification_status: {
      persona_session_id: { type: String },
      verified: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
