const moongose = require("mongoose")


const db = ()=>{
    
const MONGO_URL = "mongodb+srv://alikemal:1462ALkemal@haberify.zlyltho.mongodb.net/?retryWrites=true&w=majority"

moongose.connect(MONGO_URL,{
   
}).then(()=>{console.log("veri tabanı bağlandı mongoodb")})
.catch((error)=>{
    console.log(error)
})

}

module.exports =db