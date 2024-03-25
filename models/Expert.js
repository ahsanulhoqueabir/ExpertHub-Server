import mongoose from "mongoose";

const expertSchema = mongoose.Schema({
  education: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  field_of_expertise: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  skills: {
    type: [String],
  },
  facebook: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  features: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  certificate: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Expert", expertSchema);
