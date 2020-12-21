const mongoose = require("mongoose");
const db = require("models");

//This file empties the posts collection and inserts seed below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/atlas", {
	useNewUrlParser: true,
});

const UserSeed = [
	{
		email: "ian@mail.com",
		password: "password",
		userCreated: new Date(Date.now()),
		firstName: "Ian",
		lastName: "Erickson",
	},
];
