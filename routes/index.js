const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
require('dotenv').config();

router.get(`${process.env.PREFIX}:urlId`, async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.originalUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;