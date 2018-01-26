import { getHotels } from "./common";

export const fetchHotels = () => {
	return (dispatch, getState) => {
		const { rating } = getState();
		getHotels(dispatch, rating);
	};
};
