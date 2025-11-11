import { Product } from "../model/AddProduct.js";

export const getProducts=async(req,res)=>{


    try {
           
    const product = await Product.find()
      
  
    

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
   
     
    } catch (error) {
        console.log(error)
        
    }
}







export const AddProduct = async (req, res) => {
  try {
    const { name, description,email } = req.body;

    const product = new Product({ name, description,email });
    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
