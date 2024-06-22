const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const {requireAuth} = require("../middleware/requireAuth");

const router = express.Router();

router.get("/:chatId", requireAuth, allMessages);
router.post("/", requireAuth, sendMessage);

module.exports = router;
