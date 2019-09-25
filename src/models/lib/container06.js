import txtBig1 from './texts/trecho';
import txt1 from './texts/diario_de_viagem';

export default {
	id: 'o_trecho',
	title: 'O TRECHO',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'1-2',
		'1-3',
		'2-4',
		'3-4',
		'5-4',
		'6-4',
		'5-7',
		'6-7'

	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-end',
			elements: [
				{
					type: 'image',
					ref: 'image_01',
					margin: 'margin-right',
					textType: '',
					alt: 'Vidas Continuadas',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/vidascontinuadas1.png',
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
			flex: 'flex-center',
			elements: [
				{
					type: 'image',
					ref: 'image_02',
					margin: '',
					textType: '',
					alt: 'Cachorro Morto na Estrada 01',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/Screen Shot 2017-03-31 at 8.05.52 PM.png',
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
			flex: '',
			elements: [
				{
					type: 'image',
					ref: 'image_03',
					margin: 'margin-right',
					textType: '',
					alt: 'Cachorro Morto na Estrada 02',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/Screen Shot 2017-03-31 at 8.05.45 PM.png',
					text: '',
					sizes: {
						xs: 8,
						md: 3	
					}
				},
				{
					type: 'image',
					ref: 'image_04',
					margin: '',
					textType: '',
					alt: 'Cachorro Morto na Estrada 03',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/Screen Shot 2017-03-31 at 8.05.58 PM.png',
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
			flex: 'flex-center',
			elements: [
				{
					type: 'text',
					id: '09 ',
					title: '',
					ref: 'text_01',
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
			flex: 'flex-between',
			elements: [
				{
					type: 'image',
					ref: 'image_05',
					margin: '',
					textType: '',
					alt: 'Malas',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/000263430032.png',
					text: '',
					sizes: {
						xs: 8,
						md: 3	
					}
				},
				{
					type: 'audio',
					title: 'Peão de Trecho',
					ref: 'audio_1',
					margin: 'margin-right',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/trecho.mp3',
					alt: 'Peão de Trecho',
					sizes: {
						xs: 8,
						md: 2
					}
				}
			]
		},
		{
			marginTop: 'margin-top-double',
			flex: 'flex-end',
			elements: [
				{
					type: 'text',
					ref: 'texto_2',
					margin: 'margin-right',
					textType: 'big',
					alt: '',
					src: '',
					text: txtBig1,
					sizes: {
						xs: 8,
						md: 3	
					}
				}
			]
		}

	]
};