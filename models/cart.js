const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);

const cartSchema = new mongoose.Schema({
userId:{
    type:Number,
    required:true,
}
,
productId:{
    type:Number,
    required:true,
},
quantity:{
    type:Number,
    required:true,
},
totalPrice:{
    type:Number,
    required:true,
}


},{timestamps:true})

cartSchema.plugin(AutoIncrement, { inc_field: 'cartId' });
module.exports = mongoose.model("cart", cartSchema)