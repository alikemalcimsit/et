const User = require("../models/user.js")


const getSingleUser = async (req ,res) =>{
    const {userId} = req.params
    try {
            const user = await User.findOne({userId})
            res.status(200).json(user)
     } catch (error) {
        res.status(500).json({message:error})
     }
}

const updateUser  = async(req,res)=>{
    const {userId} = req.params
    try {
        const user = await User.findOneAndUpdate({userId},{$set:req.body}, {new:true})
        res.status(200).json(user)
    
    } catch (error) {
        res.status(500).json({message:error})
    }
    }
    
    const deleteUser = async ( req ,res ) => {
        const {userId}=req.params
        try {
        await User.findOneAndDelete({userId})
        res.status(200).json({message:"Silme işleminiz başarılı..."})
    
    } catch (error) {
        res.status(500).json({message:error})
    }
    }




module.exports={getSingleUser, updateUser,deleteUser}