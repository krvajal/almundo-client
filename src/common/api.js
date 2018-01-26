import axios from "axios";

const SERVER_URL = "http://localhost:8080/";
const client = axios.create({
	baseURL: `${SERVER_URL}api/`,
	timeout: 1000
});

const IMAGES_ENDPOINT = "http://localhost:8080/static/images/hotels";

const getHotels = filters => {
	return client.get(`/hotels`, { params: filters }).then(response => {
		const hotels = response.data;
		return hotels.map(hotel => ({
			...hotel,
			image: `${IMAGES_ENDPOINT}/${hotel.image}`
		}));
	});
};

export default { getHotels };
