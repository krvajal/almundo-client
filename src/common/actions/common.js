import api from "../api";

export const getHotels = (dispatch, filters) => {
	dispatch({
		type: "HOTELS_FETCH_START"
	});
	api
		.getHotels(filters)
		.then(hotels => {
			dispatch({
				type: "HOTELS_FETCH_SUCCESS",
				payload: hotels
			});
		})
		.catch(err => {
			dispatch({
				type: "HOTELS_FETCH_FAIL",
				payload: err
			});
		});
};
