export const AUDIO_SELECTED = 'AUDIO_SELECTED';
export const AUDIO_CLOSED = 'AUDIO_CLOSED';

export function audioSelected(title, src) {
	return {
		type: AUDIO_SELECTED,
		payload: {
			title,
			src
		}
	};
}

export function audioClosed() {
	return {
		type: AUDIO_CLOSED
	};
}