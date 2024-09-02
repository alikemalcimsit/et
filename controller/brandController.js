const Brand = require("../models/brand.js");

const createBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteBrand = async (req,res)=>{
const {brandId} = req.params

  try {

    await Brand.findOneAndDelete({brandId})
    res.status(200).json({message:"Silme işleminiz başarılı..."})
  
} catch (error) {
  res.status(500).json({ message: error });

}

}



const getAllBrand = async ( req ,res ) => {
try {
  
   const brand =await Brand.find()
   res.status(200).json(brand)
} catch (error) {
  res.status(500).json({ message: error });
}

}




module.exports={createBrand,deleteBrand,getAllBrand}