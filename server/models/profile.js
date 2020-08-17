const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  tagline_2: {
    type: String,
    required: false,
  },
  photo_url: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
  },
})

const Profile = mongoose.model("Profile", ProfileSchema)
module.exports = Profile