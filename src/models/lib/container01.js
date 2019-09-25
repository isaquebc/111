import txt1 from './texts/o_bicho_dona_socorro';
import txt2 from './texts/transcricao_reginaldo_luciano_cicero';

export default {
	id: 'o_bicho',
	title: 'O BICHO',
	containerMargin: 'container-margin-top',
	lines: [
		'1-0',
		'2-0',
		'1-2',
		'2-3',
		'2-4',
		'3-5',
		'5-4',
		'5-6'
	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-between',
			elements: [
				{
					type: 'text',
					id: '01',
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
				},
				{
					type: 'image',
					ref: 'image_1',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/diabo_ana.png',
					alt: 'Diabo Ana',
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
					title: 'Breu',
					ref: 'video_01',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/videos/breu.mp4',
					poster: '/assets/image/Breu.png',
					alt: 'Breu',
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
					ref: 'image_2',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/diabo_2.png',
					alt: 'Diabo 2',
					sizes: {
						xs: 8,
						md: 3
					}
				},
				{
					type: 'text',
					id: '02',
					ref: 'text_2',
					margin: '',
					textType: 'small',
					alt: '',
					src: '',
					text: txt2,
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
					type: 'audio',
					title: 'O Medo é a Gente',
					ref: 'audio_1',
					margin: 'margin-left',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/cei__a_medo.mp3',
					alt: 'O Medo é a Gente',
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
					id: 1,
					type: 'text',
					ref: 'texto_3',
					margin: 'margin-left',
					textType: 'big',
					alt: '',
					src: '',
					text: 'Eu não critico o trabalho de ninguém. Cada uma pessoa tem a sua sensibilidade de trabalhar. Só que tem pessoas que trabalham de acordo mantendo medo nas pessoas, e não é assim.',
					sizes: {
						xs: 8,
						md: 4	
					}
				}
			]
		}
	]
};