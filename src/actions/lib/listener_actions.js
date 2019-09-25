export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH';
export const SET_SCROLL_BAR_HEIGHT = 'SET_SCROLL_BAR_HEIGHT';
export const FADEOUT_SECTION = 'FADEOUT_SECTION';

export function setWindowWidth(width) {
	return {
		type: SET_WINDOW_WIDTH,
		payload: width
	};
}

export function setScrollBarHeight(value, element) {
	return {
		type: SET_SCROLL_BAR_HEIGHT,
		payload: {
			value,
			element
		}
	};
}
export function fadeOutSection(section){
	return{
		type: FADEOUT_SECTION,
		payload: {
			section
		}
	};
} 