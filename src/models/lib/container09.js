import txt1 from './texts/pois_o_cara_foi_e_se_mandou';

export default {
	id: 'ocasiao',
	title: 'OCASIÃO',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'1-2',
		'1-4',
		'2-3',
		'3-4',
		'5-4'

	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-center',
			elements: [
				{
					type: 'audio',
					title: 'Que Nem Casa de Abelha',
					ref: 'audio_1',
					margin: '',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/que_nem_casa_de_abelha.mp3',
					alt: 'Que Nem Casa de Abelha',
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
					type: 'image',
					ref: 'image_01',
					margin: 'margin-right',
					textType: '',
					alt: 'Escada Colorida',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/escada_colorida.jpg',
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
					type: 'text',
					ref: 'texto_1',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'NÃO EXISTE FORTE, EXISTE COMPETIÇÃO DESIGUAL.',
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
					ref: 'texto_2',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'VOCÊS ESTÃO NA METADE DA ESCADA, JÁ.',
					sizes: {
						xs: 8,
						md: 4	
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
					id: '13',
					title: '',
					ref: 'text_03',
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
			flex: 'flex-end',
			elements: [
				{
					type: 'audio',
					title: 'Gente Que Quer',
					ref: 'audio_2',
					margin: '',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/ocasiao.mp3',
					alt: 'Gente Que Quer',
					sizes: {
						xs: 8,
						md: 2
					}
				}
			]
		}
	]
};