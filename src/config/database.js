import mongoose from "mongoose";

export const connect = async () => {
  console.log("Connecting to database...");
  console.log(process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
};
