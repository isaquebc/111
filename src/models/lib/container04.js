import txt1 from './texts/a_nossa_historia';

export default {
	id: 'peleja',
	title: 'PELEJA',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'0-2',
		'1-2',
		'2-3',
		'2-4'
	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-',
			elements: [
				{
					type: 'image',
					ref: 'image_01',
					margin: 'margin-right',
					textType: '',
					alt: 'Umbigo',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/mariano.jpg',
					text: '',
					sizes: {
						xs: 8,
						md: 3	
					}
				}
			]
		},
		{
			marginTop: 'margin-top',
			flex: 'flex-end',
			elements: [
				{
					type: 'audio',
					title: 'Obstáculo Significa Detalhe',
					ref: 'audio_1',
					margin: '',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/luta_encontro_coletivo.mp3',
					alt: 'Obstáculo Significa Detakhe',
					sizes: {
						xs: 8,
						md: 3
					}
				}
			]
		},
		{
			marginTop: 'margin-top',
			flex: 'flex-center',
			elements: [
				{
					type: 'video',
					title: 'Panos',
					ref: 'video_01',
					margin: '',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/panos.mp4',
					alt: 'Panos',
					poster: '/assets/image/Panos.png',
					sizes: {
						xs: 8,
						md: 3
					}
				}
			]
		},
		{
			marginTop: 'margin-top',
			flex: 'fex-between',
			elements: [
				{
					type: 'text',
					title: '',
					ref: 'text_01',
					margin: '',
					textType: 'big',
					src: '',
					alt: '',
					text: 'O amor é desmantelo.' ,
					sizes: {
						xs: 8,
						md: 4
					}
				}
			]
		},
		{
			marginTop: 'margin-top',
			flex: 'flex-end',
			elements: [
				{
					type: 'text',
					id: '06',
					title: '',
					ref: 'text_02',
					margin: '',
					textType: 'small',
					src: '',
					alt: '',
					text: txt1,
					sizes: {
						xs: 8,
						md: 3
					}
				}
			]
		}
	]
};