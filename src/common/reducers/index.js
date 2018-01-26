import { combineReducers } from "redux";

const ratings = (state = [], action) => {
	switch (action.type) {
		case "TOGGLE_RATING": {
			const idx = state.indexOf(action.payload);
			if (idx < 0) return [...state, action.payload];
			else return [...state.slice(0, idx), ...state.slice(idx + 1)];
		}
		case "CLEAR_RATING":
			return [];
		default:
			return state;
	}
};

const hotels = (state = [], action, rating) => {
	switch (action.type) {
		case "HOTELS_FETCH_SUCCESS":
			return action.payload;
		default:
			return state;
	}
};
// const crossSliceReducer = (state, action) => {
// 	return {
// 		ratings: state.ratings,
// 		hotels: hotelsReducer(state.hotels, action, state.rating)
// 	};
// };

const rootReducer = combineReducers({ ratings, hotels });
// const rootReducer = (state, action) => {
// 	const intermediateState = combinedReducer(state, action);
// 	const finalState = crossSliceReducer(intermediateState, action);
// 	return finalState;
// };

export default rootReducer;
