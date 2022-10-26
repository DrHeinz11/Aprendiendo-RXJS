import { Box, Stack } from '@chakra-ui/react';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import CardSlider from './components/CardSlider';
import HeaderComunidad from './components/HeaderComunidad';

const dataS = [
	{
		title: 'Antes de salir de viaje',
		number: '1',
		blog: [
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg',
				imgAlt: 'voluntariado-por-el-mundo',
				headTitle: 'tips de viaje',
				title: '5 formas de hacer voluntariados y viajar por el mundo',
				id: 1,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2013/02/trabajar-como-camarero.jpg',
				imgAlt: 'camarero-por-el-mundo',
				headTitle: 'tips de viaje',
				title: 'Consejos para trabajar de camarero por el mundo',
				id: 2,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2020/06/que-llevar-en-valija-de-mano.jpg',
				imgAlt: 'que-llevar-en-valija-de-mano',
				headTitle: 'tips de viaje',
				title: 'Cosas útiles: Qué llevar en la valija de mano?',
				id: 3,
			},
		],
	},
	{
		title: 'Despues de salir de viaje',
		number: '2',
		blog: [
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2013/02/trabajar-como-camarero.jpg',
				imgAlt: 'camarero-por-el-mundo',
				headTitle: 'tips de viaje',
				title: 'Consejos para trabajar de camarero por el mundo',
				id: 2,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg',
				imgAlt: 'voluntariado-por-el-mundo',
				headTitle: 'tips de viaje',
				title: '5 formas de hacer voluntariados y viajar por el mundo',
				id: 1,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2020/06/que-llevar-en-valija-de-mano.jpg',
				imgAlt: 'que-llevar-en-valija-de-mano',
				headTitle: 'tips de viaje',
				title: 'Cosas útiles: Qué llevar en la valija de mano?',
				id: 3,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2013/02/trabajar-como-camarero.jpg',
				imgAlt: 'camarero-por-el-mundo',
				headTitle: 'tips de viaje',
				title: 'Consejos para trabajar de camarero por el mundo',
				id: 4,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg',
				imgAlt: 'voluntariado-por-el-mundo',
				headTitle: 'tips de viaje',
				title: '5 formas de hacer voluntariados y viajar por el mundo',
				id: 5,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2020/06/que-llevar-en-valija-de-mano.jpg',
				imgAlt: 'que-llevar-en-valija-de-mano',
				headTitle: 'tips de viaje',
				title: 'Cosas útiles: Qué llevar en la valija de mano?',
				id: 6,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2013/02/trabajar-como-camarero.jpg',
				imgAlt: 'camarero-por-el-mundo',
				headTitle: 'tips de viaje',
				title: 'Consejos para trabajar de camarero por el mundo',
				id: 7,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg',
				imgAlt: 'voluntariado-por-el-mundo',
				headTitle: 'tips de viaje',
				title: '5 formas de hacer voluntariados y viajar por el mundo',
				id: 8,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2020/06/que-llevar-en-valija-de-mano.jpg',
				imgAlt: 'que-llevar-en-valija-de-mano',
				headTitle: 'tips de viaje',
				title: 'Cosas útiles: Qué llevar en la valija de mano?',
				id: 9,
			},
		],
	},
	{
		title: 'Documentos importantes',
		number: '3',
		blog: [
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2013/05/como-sacar-la-licencia-de-conducir-internacional.jpg',
				imgAlt: 'como-sacar-la-licencia-de-conducir-internacional',
				headTitle: 'tips de viaje',
				title: '¿Cómo sacar la licencia de conducir internacional?',
				id: 2,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2013/06/pasaporte-doble-ciudadania.jpg',
				imgAlt: 'pasaporte-doble-ciudadania',
				headTitle: 'tips de viaje',
				title: '¿Qué pasaporte usar si voy a viajar y tendo doble cuidadania?',
				id: 1,
			},
			{
				imgUrl:
					'https://www.yomeanimo.com/wp-content/uploads/2014/10/como-certificar-un-titulo.jpg',
				imgAlt: 'como-certificar-un-titulo',
				headTitle: 'tips de viaje',
				title: '¿Cómo certificar un título para trabajar en el exterior?',
				id: 3,
			},
		],
	},
];

const Comunidad = () => {
	return (
		<Box bg='#f1f1f1' minH='100vh'>
			<HeaderComunidad />
			<Stack py='20' px='10' gap='10'>
				{dataS?.map(element => (
					<CustomSlider
						key={element.number}
						number={element.number}
						title={element.title}
					>
						{element?.blog?.map(element => (
							<CardSlider
								key={element.id}
								imgUrl={element.imgUrl}
								imgAlt={element.imgAlt}
								headTitle={element.headTitle}
								title={element.title}
							/>
						))}
					</CustomSlider>
				))}
			</Stack>
		</Box>
	);
};

export default Comunidad;
