const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		index: {
			unique: true,
		},
	},
	password: { type: String, required: true },
	userCreated: {
		type: Date,
		default: Date.now,
	},
	firstName: { type: String, trim: true },
	lastName: { type: String, trim: true },
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
