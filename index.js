const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const  db  = require("./config/db.js")
const productRoutes = require ("./routes/productRoutes.js")
const categoryRoutes = require("./routes/categoryRoutes.js")
const authRoutes = require("./routes/authRoutes.js")
const userRoutes = require("./routes/userRoutes.js")
const brandRoutes = require("./routes/brandRoutes.js")
const orderRoutes = require("./routes/orderRoutes.js")
const cartRoutes = require("./routes/cartRoutes.js")




const app = express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb" , extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}))
app.use('/',productRoutes)
app.use('/',categoryRoutes)
app.use('/',authRoutes)
app.use('/',userRoutes)
app.use('/',brandRoutes)
app.use('/',orderRoutes)
app.use('/',cartRoutes)




db()
const PORT = 5000

app.listen(PORT,()=>{
console.log("server is running on Port :  " ,PORT)

})


