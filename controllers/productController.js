const db = require("../models");

module.exports = {
	create: function (req, res) {
		db.Product.create(req.body)
			.then((data) => res.json(data))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},
};
