import txt1 from './texts/a_pessoa_fica_suja';
import txt2 from './texts/dinheiro_travado';
import txt3 from './texts/trabalho_escravo';

export default {
	id: 'rodado',
	title: 'RODADO',
	containerMargin: 'container-margin-top',
	lines: [
		'2-0',
		'1-4',
		'2-3',
		'2-4',
		'3-5',
		'4-5',
		'5-4',
		'6-5',
		'7-5'
	],
	rows: [
		{
			marginTop: 'margin-top',
			flex: 'flex-between',
			elements: [
				{
					type: 'text',
					id: '10',
					title: '',
					ref: 'text_01',
					margin: 'margin-right',
					textType: 'small',
					src: '',
					alt: '',
					text: txt1,
					sizes: {
						xs: 8,
						md: 3
					}
				},
				{
					type: 'audio',
					title: 'Se O Mundo Te Fizer Cair',
					ref: 'audio_1',
					margin: '',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/se_o_mundo_te_fizer_cair.mp3',
					alt: 'Se O Mundo Te Fizer Cair',
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
					type: 'audio',
					title: 'Escravidão Não Tem Condição',
					ref: 'audio_2',
					margin: 'margin-left',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/audios/escravidao.mp3',
					alt: 'Escravidão Não Tem Condição',
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
					type: 'text',
					ref: 'texto_1',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'ME QUEBROU PELA EMENDA.',
					sizes: {
						xs: 8,
						md: 3	
					}
				},
				{
					type: 'text',
					id: '11',
					title: '',
					ref: 'text_02',
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
		},
		{
			marginTop: 'margin-top',
			flex: 'flex-between',
			elements: [
				{
					type: 'text',
					id: '12',
					title: '',
					ref: 'text_03',
					margin: 'margin-left',
					textType: 'small',
					src: '',
					alt: '',
					text: txt3,
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
					ref: 'image_02',
					textType: '',
					alt: 'Furacao',
					src: 'https://s3-us-west-2.amazonaws.com/centoeonze/images/FURACAO.png',
					text: '',
					sizes: {
						xs: 8,
						md: 3	
					}
				},
				{
					type: 'text',
					ref: 'texto_4',
					margin: '',
					textType: 'big',
					alt: '',
					src: '',
					text: 'ASSIM EU TÔ NUM BOLO DA PORRA AÍ NÉ, COM SOBRE ESSA FIRMA NÉ. TÁ MEIO EMBAÇADO ISSO AÍ VELHO. EU ME CONSTRANGI DEMAIS COM ISSO. DEMAIS JÁ TEM MUITO TEMPO NÉ ISSO AÍ. TÁ EMBAÇADO. EU TÔ DOIDO PRA ME LIVRAR EU NÃO VEJO A HORA DE ME LIVRAR DISSO PORQUE EU QUERO CONTINUAR MINHA TRAJETÓRIA NÉ. MINHAS VIAGENS. EU NÃO VIAJEI MAIS NÃO SÓ ESPERANDO POR ISSO E TAMBÉM  POR CAUSA DA CRISE NÉ. OS EMPREGOS EU TÔ AQUI HÁ DOIS ANOS, COISA QUE EU NUNCA FIQUEI, DOIS ANOS AQUI RODADO SEM FAZER NADA, FAZENDO BICO. TÁ EMBAÇADO E EU TÔ QUERENDO ME LIVRAR DISSO POR QUE AÍ EU VOLTO MINHA LIBERDADE DE NOVO.',
					sizes: {
						xs: 8,
						md: 4	
					}
				},
			]
		},		
	]
};