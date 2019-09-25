import txt1 from './texts/cemiterio';
import txt2 from './texts/operario_partido_ao_meio';

export default {
	id: 'desvio_de_funcao',
	title: 'DESVIO DE FUNÇÃO',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'1-2',
		'3-2',
		'4-2',
		'3-5',
		'4-5',
		'5-6',
		'5-7'
	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-between',
			elements: [
				{
					type: 'image',
					ref: 'image_01',
					margin: '',
					textType: '',
					alt: 'Igreja',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/igreja.jpg',
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
					title: 'Capacidade Responsável',
					ref: 'audio_1',
					margin: '',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/responsabilidade.mp3',
					alt: 'Capacidade Responsável',
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
					id: '07',
					title: '',
					ref: 'text_01',
					margin: 'margin-left',
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
					type: 'audio',
					title: 'O Rio',
					ref: 'audio_2',
					margin: 'margin-right',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/o_rio.mp3',
					alt: 'O Rio',
					sizes: {
						xs: 8,
						md: 3
					}
				},
				{
					type: 'image',
					ref: 'image_02',
					margin: '',
					textType: '',
					alt: 'Cemitério',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/cemiterio_menino.jpg',
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
					ref: 'texto_2',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'A maioria das pessoas querem colocar empregada mas quererem humilhar porque empregada tem que lavar, passar, cozinhar, cuidar do menino, levar menino na escola, arrumar a casa. E pensa que querem pagar um salário mínimo? E ainda tem outra, às vezes quando a patroa não tá em casa aí o patrão chega e ainda quer dar beijo. Quer a empregada. Ou se deita mais o patrão ou já no outro dia já não precisa ir mais.',
					sizes: {
						xs: 8,
						md: 4	
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
					ref: 'image_03',
					margin: '',
					textType: '',
					alt: 'A Escada',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/escada.jpg',
					text: '',
					sizes: {
						xs: 8,
						md: 3	
					}

				},
				{
					type: 'text',
					id: '08',
					title: '',
					ref: 'text_03',
					margin: '',
					textType: 'small',
					src: '',
					alt: '',
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