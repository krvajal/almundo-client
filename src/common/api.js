import axios from "axios";

const API_ENDPOINT = "http://localhost:8080/api";
const IMAGES_ENDPOINT = "http://localhost:8080/static/images/hotels";
const getHotels = ratings => {
	return axios
		.get(`${API_ENDPOINT}/hotels`, { params: { ratings } })
		.then(response => {
			const hotels = response.data;
			return hotels.map(hotel => ({
				...hotel,
				image: `${IMAGES_ENDPOINT}/${hotel.image}`
			}));
		})
		.catch(err => {
			console.error("get hotels failed");
		});
};

export default { getHotels };
