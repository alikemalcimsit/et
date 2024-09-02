const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);

const orderSchema = new mongoose.Schema({

userId:{
    type:Number,
    required:true,
}
,
totalPrice:{
    type:Number,
    required:true, 
}
,
adress:{
    type:String,
    required:true,
}
},{timestamps:true})

orderSchema.plugin(AutoIncrement, { inc_field: 'orderId' });
module.exports = mongoose.model("order", orderSchema)