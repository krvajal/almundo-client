import { getHotels } from "./common";

export const toggleRating = rating => {
	return (dispatch, getState) => {
		dispatch({
			type: "TOGGLE_RATING",
			payload: rating
		});
		const { filters } = getState();
		getHotels(dispatch, filters);
	};
};

export const clearRatings = () => {
	return (dispatch, getState) => {
		dispatch({
			type: "CLEAR_RATING"
		});
		const { filters } = getState();
		getHotels(dispatch, filters);
	};
};
