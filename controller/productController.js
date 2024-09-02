const Product = require('../models/product.js')

const createProduct = async (req , res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}



const getAllProduct = async ( req, res) =>{
try {
    
const product = await Product.find()
res.status(200).json(product)


} catch (error) {
    res.status(500).json({message:error})
}

}


const getSingleProduct= async (req,res)=>{
const {productId} = req.params
try {
    const product = await Product.findOne({productId})
    res.status(200).json(product)

} catch (error) {
    res.status(500).json({message:error})
}
}
const getProductbyCategoryId = async (req,res) => { 
    const {categoryId} = req.params
try {
    const product = await Product.find({categoryId})
    res.status(200).json(product)
} catch (error) {
    res.status(500).json({message:error})  
}
}

const getProductbyBrandId = async(req,res)=>{
    const {brandId} = req.params
    try {
        const product = await Product.find({brandId})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}

const updateProduct  = async(req,res)=>{
const {productId} = req.params
try {
    const product = await Product.findOneAndUpdate({productId},{$set:req.body}, {new:true})
    res.status(200).json(product)

} catch (error) {
    res.status(500).json({message:error})
}
}


const deleteProduct = async ( req ,res ) => {
    const {productId}=req.params
    try {
    await Product.findOneAndDelete({productId})
    res.status(200).json({message:"Silme işleminiz başarılı..."})

} catch (error) {
    res.status(500).json({message:error})
}
}


module.exports={createProduct,getAllProduct,getSingleProduct,deleteProduct,getProductbyCategoryId,getProductbyBrandId,updateProduct}