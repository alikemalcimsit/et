const {createCart,deleteCart,getCartbyUserId, updateCart} = require("../controller/cartController.js")
const express = require("express")

const router = express.Router()

router.post("/createCart", createCart)
router.delete("/deleteCart/:cartId", deleteCart)
router.get("/getCartByUserId/:userId", getCartbyUserId)
router.put("/updateCart/:cartId", updateCart)

module.exports = router

