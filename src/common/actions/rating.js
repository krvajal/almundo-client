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
