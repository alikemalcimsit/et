const {createCategory,deleteCategory,getAllCtegory} = require("../controller/categoryController.js")
const express = require("express")

const router = express.Router()

router.post("/createCategory", createCategory)
router.delete("/deleteCategory", deleteCategory)
router.get("/getAllCategory", getAllCtegory)


module.exports = router

