const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Blog!");
});

module.exports = router;   // 👈 export the router directly
