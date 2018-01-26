import {combineReducers} from 'redux';

const searchTerm = (state ='', action) => {
	switch(action.type) {
		case "SET_SEARCH_TERM":
			return action.payload;
		default:
		return state;
	}
}

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


export default combineReducers({
	searchTerm
	ratings
})

