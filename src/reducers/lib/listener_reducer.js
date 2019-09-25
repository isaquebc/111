import { SET_WINDOW_WIDTH, FADOUT_SECTION } from '../../actions/index';

const INITIAL_STATE = {
	windowWidth: 0,
	hideSection: false,
	section: ''
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SET_WINDOW_WIDTH: return { ...state, windowWidth: action.payload };
		case FADOUT_SECTION: return { ...state, hideSection: true, section: action.payload };

		default: return state;
	}
}