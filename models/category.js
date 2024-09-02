const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);

const categorySchema = new mongoose.Schema({

  
    categoryName:{
        type:String,
        unique:true,
        required: true,
    }
},{timestamps:true})

categorySchema.plugin(AutoIncrement, { inc_field: 'categoryId' });
module.exports = mongoose.model("category", categorySchema)