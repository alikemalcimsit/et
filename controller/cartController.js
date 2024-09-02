const Cart = require("../models/cart.js");

const getCartbyUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.find({ userId });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


const updateCart  = async(req,res)=>{
    const {cartId} = req.params
    try {
        const cart = await Cart.findOneAndUpdate({cartId},{$set:req.body}, {new:true})
        res.status(200).json(cart)
    
    } catch (error) {
        res.status(500).json({message:error})
    }
    }

const createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteCart = async (req, res) => {
  const { cartId } = req.params;

  try {
    await Cart.findOneAndDelete({ cartId });
    res.status(200).json({ message: "Silme işleminiz başarılı..." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getCartbyUserId, createCart, deleteCart,updateCart };
