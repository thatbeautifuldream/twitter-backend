import mongoose, { Schema } from "mongoose";

const hashtagSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

export default Hashtag;
