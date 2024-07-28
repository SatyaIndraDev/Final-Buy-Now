const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
   image: String,
      name: String,
      rating: Number,
      desc: String,
      price: Number,
    
},{
    versionKey: false
});


const ProductsModel = mongoose.model("products", ProductsSchema);


module.exports = {
    ProductsModel
}