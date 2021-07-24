const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

router.post("/apex", auth, (req, res) => {
  // TODO: Nunu fill this in 
});