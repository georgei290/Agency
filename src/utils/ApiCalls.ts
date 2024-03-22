import axios from "axios";

export const createUser = async () => {
	try {
		const response = await axios.post(
			"https://dom-ranker-2487.onrender.com/api/v1/create-user",
		);

		return response;
	} catch (err) {
		return err;
	}
};
