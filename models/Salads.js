import mongoose from "mongoose";

const SaladsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.models.Salads ||
  mongoose.model("Salads", SaladsSchema);
