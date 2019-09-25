export const SET_SCROLL_POINTS = 'SET_SCROLL_POINTS';

export function setScrollPoints(id, value) {
	return {
		type: SET_SCROLL_POINTS,
		payload: {
			id,
			value
		}
	};
}