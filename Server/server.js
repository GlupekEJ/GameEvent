import express from "express";
import { join } from "path";
import cors from "cors";

import __dirname from "./__dirname.js";
import { API } from "./API.js";

const app = express();
const port = process.env.PORT ? process.env.PORT : 3010;

app.use("/", express.static(join(__dirname, "public", "browser")));
app.use(express.json());
app.use(
  cors({
    origin: "*", //fixed the cors error by using *
  })
);

const comments = [
  new API("Erik", "Lars is king"),
  new API("Lars", "Erik is the best"),
];

app.get("/comments", cors(), (req, res) => {
  res.json(comments.map((comments) => comments.getInfo()));
});

app.post("/comments", cors(), (req, res) => {
  const { author, comment } = req.body;
  if (author && comment) {
    const newComment = new API(author, comment);
    comments.push(newComment);
    res.status(201).json(newComment.getInfo());
  } else {
    res.status(400).json({ error: "Author and comments are required" });
  }
});

app.listen(port, () => {
  console.log(`Node-Express server listening on port ${port}`);
});
