import mongoose from "mongoose";

const repairSchema = new mongoose.Schema(
  {
    carRef: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Repair = mongoose.model("Repair", repairSchema);

export default Repair;