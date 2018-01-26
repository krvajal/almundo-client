import { getHotels } from "./common";

export const search = searchTerm => {
	return (dispatch, getState) => {
		dispatch({
			type: "SET_SEARCH_TERM",
			payload: searchTerm
		});
		const { filters } = getState();
		getHotels(dispatch, filters);
	};
};
