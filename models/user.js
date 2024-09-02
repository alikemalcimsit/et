const mongoose = require("mongoose")


const AutoIncrement = require("mongoose-sequence")(mongoose);
const userSchema = new mongoose.Schema({

firstName:{
    type:String,
    required:true,
},
lastName:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:true,
},
favorites:{
    type:[String],
},
adress:{
    type:[String],
    required:true,
},
})
userSchema.plugin(AutoIncrement, { inc_field: 'userId' });
module.exports = mongoose.model("user", userSchema)