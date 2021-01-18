import axios from "axios";

export default {
	createNewUser: (userData) => {
		return axios.post("/api/users/signup", userData);
	},
};
