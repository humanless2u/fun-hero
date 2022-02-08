const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res) => {
  let msg = req.body.msg;
  return res.send({ msg });
});

module.exports = router;
