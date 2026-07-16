const express = require("express");
const router = express.Router();
const {getItems,createItem,deleteItem}= require("../../controllers/itemcontroller");
const {authenticateToken}=require("../../controllers/authcontroller");

router.get("/",authenticateToken, getItems);
router.post("/", createItem);
router.delete("/:id", deleteItem);

module.exports = router;