import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    price: {type: Number, required:true},
    image: {type: Array, required:true},
    category: {type: String, required:true},
    subCategory: {type: String, required:true},
    sizes: {type: Array, required:true},
    bestseller: {type: Boolean},
    date: {type: Number, required:true}
})

// Agr toh product bna hua hai toh ussi ko update karo wrna pehli baar toh nya bnana hi pdega isliye bna lo
const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel