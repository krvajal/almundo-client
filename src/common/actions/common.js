import api from "../api";

export const getHotels = (dispatch, filters) => {
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
