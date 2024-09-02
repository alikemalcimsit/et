const Category = require("../models/category.js");

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteCategory = async (req,res)=>{
const {categoryId} = req.params

  try {

    await Category.findOneAndDelete({categoryId})
    res.status(200).json({message:"Silme işleminiz başarılı..."})
  
} catch (error) {
  res.status(500).json({ message: error });

}

}



const getAllCtegory = async ( req ,res ) => {
try {
  
   const category =await Category.find()
   res.status(200).json(category)
} catch (error) {
  res.status(500).json({ message: error });
}

}




module.exports={createCategory,deleteCategory,getAllCtegory}