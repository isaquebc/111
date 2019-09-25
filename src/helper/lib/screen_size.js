export function screenSize(width) {
	if(width >= 1200) return 'lg';
	if(width >= 992) return 'md';
	if(width >= 768) return 'sm';
	return 'xs';
}