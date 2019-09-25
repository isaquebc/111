import { combineReducers } from 'redux';

import audioReducer from './lib/audio_reducer';
import listenerReducer from './lib/listener_reducer';
import svgReducer from './lib/svg_reducer';

export default combineReducers({
	audio: audioReducer,
	listener: listenerReducer,
	svg: svgReducer
});