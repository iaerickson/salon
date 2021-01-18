const mongoose = require("mongoose");
const db = require("../models");

//This file empties the posts collection and inserts seed below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/salon", {
	useNewUrlParser: true,
});

const userSeed = [
	{
		email: "ian@mail.com",
		password: "password",
		userCreated: new Date(Date.now()),
		firstName: "Ian",
		lastName: "Erickson",
	},
	{
		email: "test@mail.com",
		password: "testpass",
		userCreated: new Date(Date.now()),
		firstName: "Test",
		lastName: "User",
	},
];

const productSeed = [
	{
		item: "Shampoo",
		description: "Goes on first",
		price: "12.99",
	},
	{
		item: "Conditioner",
		description: "Makes hair silky and smooth",
		price: "7.95",
	},
	{
		item: "Hairspray",
		description: "Bad for Ozone",
		price: "2.99",
	},
];

db.User.deleteMany({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then((data) => {
		console.log(data.results.n + " user records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.log.error(err);
		process.exit(1);
	});

db.Product.deleteMany({})
	.then(() => db.Product.collection.insertMany(productSeed))
	.then((data) => {
		console.log(data.results.n + " product records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.log.error(err);
		process.exit(1);
	});
