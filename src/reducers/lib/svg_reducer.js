import { SET_SCROLL_POINTS } from '../../actions/index';

const INITIAL_STATE = {
	points: {}
};

export default function(state = INITIAL_STATE, action) {

	var points = { ...state.points };

	switch(action.type) {
		case SET_SCROLL_POINTS: {
			points[action.payload.id] = action.payload.value;

			return { ...state, points };
		}

		default: return state;
	}
}