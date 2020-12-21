const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");

//User and product routes
router.use("/products", productRoutes);
router.use("/users", userRoutes);

//For anything else, render the html page
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
