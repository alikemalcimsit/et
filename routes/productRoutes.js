const {createProduct, getAllProduct,getSingleProduct, deleteProduct, getProductbyCategoryId,getProductbyBrandId, updateProduct} = require("../controller/productController.js")

const express = require("express")

const router = express.Router()

router.post("/createProduct", createProduct)
router.get("/getAllProducts", getAllProduct)
router.get("/getSingleProduct/:productId", getSingleProduct)
router.get("/getProductbyCategory/:categoryId", getProductbyCategoryId)
router.get("/getProductbyBrand/:brandId",getProductbyBrandId)
router.put('/updateProduct/:productId',updateProduct)
router.delete("/deleteProduct/:productId", deleteProduct)



module.exports=router