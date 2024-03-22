import mongoose from "mongoose";
// const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
    },
    designation: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    workshopDate: {
      type: String,
      required: true,
    },
    workshopStartTime: {
      type: String,
      required: true,
    },
    workshopEndTime: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    seats: {
      type: Number,
      required: true,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Workshop", workshopSchema);
