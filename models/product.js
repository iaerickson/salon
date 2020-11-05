const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    item: String,
    brand: String,
    description: String,
    short_description: String,
    thumbnail_url: String,
    price: Number,
    inventory: Number
});

//Solution found here
// https://stackoverflow.com/questions/13304129/how-should-i-store-a-price-in-mongoose
productSchema.path('price').get(function(num) {
    return (num / 100).toFixed(2);
});

productSchema.path('price').set(function(num) {
    return num *100;
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;