import txt1 from './texts/texto_email';

export default {
	id: 'pensar',
	title: 'PENSAR',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'0-2',
		'1-3',
		'3-2',
		'3-4',
		'3-5',
		'4-5'


	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: '',
			elements: [
				{
					type: 'text',
					ref: 'texto_1',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'PARA UM TRABALHO QUE SE QUER, SEMPRE A FERRAMENTA SE TEM. (ROSA, GUIMARÃES. 2015: P.95).',
					sizes: {
						xs: 8,
						md: 4	
					}
				}
			]
		},
		{
			marginTop: 'margin-top',
			flex: 'flex-between',
			elements: [
				{
					type: 'audio',
					title: 'Formar Uma Escola',
					ref: 'audio_1',
					margin: 'margin-left',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/escla_tecnica.mp3',
					alt: 'Formar Uma Escola',
					sizes: {
						xs: 8,
						md: 3
					}
				},
				{
					type: 'text',
					id: '14',
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
		},
		{
			marginTop: 'margin-top',
			flex: '',
			elements: [
				{
					type: 'image',
					ref: 'image_01',
					margin: '',
					textType: '',
					alt: 'Jantar',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/foto_jantar.png',
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
					title: 'O Que é Trabalho',
					ref: 'audio_2',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/socorro.mp3',
					alt: 'O Que é Trabalho',
					sizes: {
						xs: 8,
						md: 3
					}
				}
			]
		},
		{
			marginTop: 'margin-top',
			flex: '',
			elements: [
				{
					type: 'text',
					ref: 'texto_3',
					margin: 'margin-left',
					textType: 'big',
					alt: '',
					src: '',
					text: 'A NOSSA MENTE ELA É UMA USINA GERADORA.',
					sizes: {
						xs: 8,
						md: 4	
					}
				}
			]
		}
	]
};