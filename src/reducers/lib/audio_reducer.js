import { AUDIO_SELECTED, AUDIO_CLOSED, PLAY_VIDEO } from '../../actions/index';

const INITIAL_STATE = {
	title: null,
	src: null
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {

		case AUDIO_SELECTED: return { title: action.payload.title, src: action.payload.src };
		case PLAY_VIDEO:
		case AUDIO_CLOSED:
			return { ...INITIAL_STATE };

		default: return state;
	}
}