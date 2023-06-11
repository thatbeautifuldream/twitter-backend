import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connect } from "./config/database.js";
import { Tweet } from "./models/tweet.js";

const app = express();

app.listen(3000, async () => {
  console.log("Server listening on port 3000");
  connect();
  console.log("Connected to database");
  Tweet.create({
    content: "This is my first tweet",
    likes: 12,
    noOfRetweets: 2,
    comment: "This is my first comment",
  });
});
