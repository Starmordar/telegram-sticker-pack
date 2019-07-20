const express = require("express");
const router = express.Router();
const path = require("path");


const { bot_token } = require("../config/config");
const { checkAuthentification } = require('../authentification/auth');

router.get("/", function (req, res) {
  const userData = req.query;
  
  checkAuthentification(bot_token, userData);
  
  res.sendFile(path.resolve(__dirname + "/../../frontend/src/index.html"));
});

module.exports = router;
