const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	item: String,
	brand: String,
	description: String,
	short_description: String,
	thumbnail_url: String,
	price: Number,
	inventory: Number,
});

//Solution found here
// https://stackoverflow.com/questions/13304129/how-should-i-store-a-price-in-mongoose
ProductSchema.path("price").get(function (num) {
	return (num / 100).toFixed(2);
});

ProductSchema.path("price").set(function (num) {
	return num * 100;
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
