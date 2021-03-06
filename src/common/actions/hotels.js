import { getHotels } from "./common";

export const fetchHotels = () => {
	return (dispatch, getState) => {
		const { filters } = getState();
		getHotels(dispatch, filters);
	};
};
