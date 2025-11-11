import mongoose from "mongoose"


export const mongoCon=async(url)=>{

try {
    
   await mongoose.connect(url);
   console.log("Coneccted")

} catch (error) {
    console.log("conectin failed",error.message)
    process.exit(1)
    
}


}