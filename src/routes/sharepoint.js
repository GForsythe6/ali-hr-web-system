const express = require("express");

const router = express.Router();

router.get("/test", async (req, res) => {
  res.json({
    success: true,
    message: "HR SharePoint API route working",
  });
});

module.exports = router;