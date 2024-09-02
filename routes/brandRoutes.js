const {createBrand,deleteBrand,getAllBrand} = require("../controller/brandController.js")
const express = require("express")

const router = express.Router()

router.post("/createBrand", createBrand)
router.delete("/deleteBrand", deleteBrand)
router.get("/getAllBrand", getAllBrand)


module.exports = router

