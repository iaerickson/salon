const router = require("express").Router();
const usersController = require("../../controllers/userController");

router.route("login").post((req, res) => {});

router.route("signup").post((req, res) => {
	usersController.create(req, res);
});

module.exports = router;
