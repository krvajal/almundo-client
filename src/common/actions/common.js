import api from "../api";

export const getHotels = (dispatch, rating) => {
	api
		.getHotels(rating)
		.then(hotels => {
			dispatch({
				type: "HOTELS_FETCH_SUCCESS",
				payload: hotels
			});
		})
		.catch(err => {
			dispatch({
				type: "HOTELS_FETCH_FAILURE",
				payload: err
			});
		});
};
