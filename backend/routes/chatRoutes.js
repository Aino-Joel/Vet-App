const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const {requireAuth} = require("../middleware/requireAuth");

const router = express.Router();

router.post("/", requireAuth, accessChat);
router.get("/", requireAuth, fetchChats);
router.post("/group", requireAuth, createGroupChat);
router.put("/rename", requireAuth, renameGroup);
router.put("/groupremove", requireAuth, removeFromGroup);
router.put("/groupadd", requireAuth, addToGroup);

module.exports = router;
