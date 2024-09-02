const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);

const brandSchema = new mongoose.Schema({

  
    brandName:{
        type:String,
        unique:true,
        required: true,
    }
},{timestamps:true})

brandSchema.plugin(AutoIncrement, { inc_field: 'brandId' });
module.exports = mongoose.model("brand", brandSchema)