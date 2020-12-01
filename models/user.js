const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: String,
	password: String,
	firstName: String,
	lastName: String,
	pronouns: String,
	birthday: String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zipcode: Number,
	phone: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
