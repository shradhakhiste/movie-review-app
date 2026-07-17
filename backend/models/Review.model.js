import  mongoose, {Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    movie: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Review = mongoose.model("Review", reviewSchema);
