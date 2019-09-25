import txt1 from './texts/contrato';

export default {
	id: 'interperie',
	title: 'INTEMPÉRIE',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'0-2',
		'1-3',
		'3-2',
		'3-4'
	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-end',
			elements: [
				{
					type: 'text',
					ref: 'texto_1',
					margin: 'margin-right',
					textType: 'big',
					alt: '',
					src: '',
					text: 'Teve ameaça. Teve ameaça. Disseram que iam botar uns peão pra atirar na gente [...] teve ameaça. Teve aviso que se a gente denunciasse quem denunciou ia morrer. Eu digo, quem já tá no meio fogo meu amigo quer se queimar ninguém quer se molhar não.',
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
					type: 'audio',
					title: 'Não Tem Jeito Não Ter Conflito',
					ref: 'audio_1',
					margin: 'margin-right',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/conflito.mp3',
					alt: 'Não Tem Jeito N Ter Conflito',
					sizes: {
						xs: 8,
						md: 3
					}
				},
				{
					type: 'text',
					id: '05',
					ref: 'text_2',
					margin: '',
					textType: 'small',
					alt: 'text_2',
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
			flex: '',
			elements: [
				{
					type: 'audio',
					title: 'O Invasor Traiu Primeiro',
					ref: 'audio_02',
					margin: 'margin-left',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/tiabeza_conflito.mp3',
					alt: 'O Invaso Traiu Primeiro',
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
					title: 'Bezerro',
					ref: 'video_01',
					margin: '',
					src: 'https://111-assets.s3-us-west-2.amazonaws.com/bezerro.mp4',
					alt: 'Bezerro',
					sizes: {
						xs: 8,
						md: 3
					}
				}
			]
		}
	]
};