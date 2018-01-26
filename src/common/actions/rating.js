import { getHotels } from "./common";

export const toggleRating = rating => {
	return (dispatch, getState) => {
		dispatch({
			type: "TOGGLE_RATING",
			payload: rating
		});
		const { ratings } = getState();
		getHotels(dispatch, ratings);
	};
};
