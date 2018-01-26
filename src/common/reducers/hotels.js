const INITIAL_STATE = {
	loaded: false,
	items: [],
	failed: false
};
const hotels = (state = INITIAL_STATE, action, rating) => {
	switch (action.type) {
		case "HOTELS_FETCH_START":
			return {
				...state,
				loaded: false,
				failed: false
			};

		case "HOTELS_FETCH_SUCCESS":
			return {
				loaded: true,
				items: action.payload,
				failed: false
			};
		case "HOTELS_FETCH_FAIL":
			return {
				...state,
				loaded: true,
				failed: true
			};
		default:
			return state;
	}
};

export default hotels;
