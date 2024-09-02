const express = require("express")
const {getSingleUser,updateUser,deleteUser} = require("../controller/userController.js")

const router = express.Router()


router.get("/getSingleUser/:userId" , getSingleUser)
router.put("/updateUser/:userId" , updateUser)
router.delete("/deleteUser/:userId" , deleteUser)



module.exports = router

