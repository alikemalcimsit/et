const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);


const productSchema = new mongoose.Schema({
    

    categoryId:{
        type:Number,
        required:true,
        
    },
    brandId:{
        type:Number,
        require:true,
    },
    image:{
        type:[String],
    },
    title:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    price:{
        type:Number,
        required:true,
    },
    colorOptions:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },











},{timestamps:true}) 


productSchema.plugin(AutoIncrement, { inc_field: 'productId' });
module.exports = mongoose.model("product", productSchema)