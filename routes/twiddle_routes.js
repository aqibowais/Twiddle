const express = require('express');
const router = express.Router();
const { storeUrl, getUrl, getQRCode } = require("../controllers/twiddle_controller");

router.post("/crunch", storeUrl);
router.get("/:shortUrl", getUrl);
router.get("/qryptic/:url", getQRCode);

module.exports = router;