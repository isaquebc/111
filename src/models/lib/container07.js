export default {
	id: 'sistema',
	title: 'SISTEMA',
	containerMargin: 'container-margin-top',
	lines: [
		'0-1',
		'0-2',
		'1-3',
		'2-3',
		'3-4',
		'4-5'

	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-end',
			elements: [
				{
					type: 'video',
					title: 'Motor e pregos',
					ref: 'video_01',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/videos/DJI_0078.mp4',
					alt: 'Motor e pregos',
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
					title: 'O Sistema é Bruto',
					ref: 'audio_1',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/o_sistema_e_bruto.mp3',
					alt: 'O Sistema é Bruto',
					sizes: {
						xs: 8,
						md: 2
					}
				},
				{
					type: 'audio',
					title: 'Rodoviária',
					ref: 'audio_2',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/rodoviaria.mp3',
					alt: 'Rodoviária',
					sizes: {
						xs: 8,
						md: 2
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
					ref: 'texto_1',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'EU TINHA DOIS EMPREGOS E AINDA FAZIA UM BICOZINHO À NOITE DE SEGURANÇA. SE EU NÃO ME ENGANO EU DORMIA ACHO QUE 4/5 HORAS SÓ. O RESTO ERA SÓ TRABALHO. PASSEI 8 ANOS NESSE SISTEMA.',
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
					type: 'image',
					ref: 'image_02',
					margin: 'margin-left',
					textType: '',
					alt: 'Sistema',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/layout7_ sistema.png',
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
					type: 'text',
					ref: 'texto_2',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'É O QUE TÁ ACABANDO, O QUE TÁ ACABANDO COM A CONSTRUÇÃO CIVIL NO NOSSO PAÍS. É A TERCEIRIZAÇÃO. ISSO VIRA UMA PIRÂMIDE DE ROUBO, DE MALANDRAGEM. QUE REALMENTE JÁ COMEÇA DAS GRANDES. MAS AÍ ATÉ CHEGAR NOS PEÃO QUE É OS ÚLTIMOS AGENTES. COLABORADOR QUE ELES QUER QUE CHAME, NÉ? VAI FICANDO DINHEIRO NO MEIO DESSE CAMINHO TUDINHO.',
					sizes: {
						xs: 8,
						md: 4	
					}
				}
			]
		},
	]
};