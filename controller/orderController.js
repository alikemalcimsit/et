const Order = require("../models/order.js")



const createOrder = async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  


const getAllOrder = async(req,res)=>{
    try {
        const order = await Order.find()
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getSingleOrder = async (req ,res) =>{
    const {orderId} = req.params
    try {
            const order = await Order.findOne({orderId})
            res.status(200).json(order)
     } catch (error) {
        res.status(500).json({message:error})
     }
}

const updateOrder  = async(req,res)=>{
    const {orderId} = req.params
    try {
        const order = await Order.findOneAndUpdate({orderId},{$set:req.body}, {new:true})
        res.status(200).json(order)
    
    } catch (error) {
        res.status(500).json({message:error})
    }
    }
    
    const deleteOrder = async ( req ,res ) => {
        const {orderId}=req.params
        try {
        await Order.findOneAndDelete({orderId})
        res.status(200).json({message:"Silme işleminiz başarılı..."})
    
    } catch (error) {
        res.status(500).json({message:error})
    }
    }




module.exports={createOrder,getAllOrder,getSingleOrder, updateOrder,deleteOrder}