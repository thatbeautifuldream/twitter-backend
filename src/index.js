import * as dotenv from "dotenv";
import express from "express";
import connect from "./config/database.js";
import TweetRepository from "./repository/tweetRepository.js";
// import Tweet from "./models/tweet.js";
// import Hashtag from "./models/hashtag.js";

dotenv.config();
const app = express();

app.listen(3000, async () => {
  console.log("Server listening on port 3000");
  connect();
  console.log("Connected to database");

  // Tweet.create({
  //   content: "This is my first tweet",
  //   likes: 12,
  //   noOfRetweets: 2,
  //   comment: "This is my first comment",
  // });

  // Hashtag.create({
  //   text: "myfirsthashtag",
  //   tweets: ["6489ebfc9b67487d2e71eb25"],
  // });

  const tweetRepo = new TweetRepository();
  let tweets = await tweetRepo.getAllTweets();
  console.log(tweets);
});
