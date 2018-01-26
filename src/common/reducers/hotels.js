const hotels = (state = [], action, rating) => {
	switch (action.type) {
		case "HOTELS_FETCH_SUCCESS":
			return action.payload;
		default:
			return state;
	}
};

export default hotels;
