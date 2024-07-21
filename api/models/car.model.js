import mongoose from "mongoose";
import { type } from "os";

const carSchema = new mongoose.Schema(
  {
    vin: {
      type: String,
      required: true,
      unique: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    spec: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

export default Car;