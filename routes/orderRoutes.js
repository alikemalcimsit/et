const express = require("express")
const {getAllOrder,getSingleOrder,deleteOrder,updateOrder, createOrder} = require("../controller/orderController.js")

const router = express.Router()


router.get("/getAllOrder", getAllOrder)
router.get("/getSingleOrder/:orderId", getSingleOrder)
router.delete("/deleteOrder/:orderId", deleteOrder)
router.put("/updateOrder/:orderId", updateOrder)
router.post("/createOrder", createOrder)



module.exports = router

