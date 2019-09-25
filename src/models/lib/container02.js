import txt1 from './texts/tubuloes';
import txt2 from './texts/faca';

export default {
	id: 'contra_conduta',
	title: 'CONTRA CONDUTA',
	containerMargin: 'container-margin-top',
	lines: [
		'2-1',
		'0-2',
		'2-3',
		'2-4',
		'3-4'
	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: '',
			elements: [
				{
					type: 'audio',
					title: 'Formar Um Grupo',
					ref: 'audio_1',
					margin: 'margin-right',
					textType: '',
					alt: 'Formar Um Grupo',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/formar_um_grupo.mp3',
					text: '',
					sizes: {
						xs: 8,
						md: 3	
					}
				},
				{
					type: 'text',
					id: '03',
					ref: 'text_1',
					margin: '',
					textType: 'small',
					alt: '',
					src: '',
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
			flex: 'flex-center',
			elements: [
				{
					type: 'image',
					ref: 'image_1',
					margin: 'margin-right',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/mao_e_espinho.jpg',
					alt: 'Mão e Espinho',
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
					ref: 'image_2',
					margin: '',
					textType: '',
					alt: 'Desenho Tubulões',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/desenho_tubuloes.jpg',
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
					id: '04',
					ref: 'text_2',
					margin: '',
					textType: 'small',
					alt: 'text_2',
					src: '',
					text: txt2,
					sizes: {
						xs: 8,
						md: 3	
					}
				}
			]
		}
	]
};