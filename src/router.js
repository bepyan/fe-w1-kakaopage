import express from "express";
import path from "path";
const __dirname = path.resolve();

const router = express.Router();

router.use("/", (req, res, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

router.get("/웹툰", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/src/pages/webtoon.html");
});

router.get("/*", (req, res) => {
  res.sendFile(__dirname + "/src/pages/dummy.html");
});

export default router;
