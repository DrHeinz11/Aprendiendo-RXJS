import { Box } from '@chakra-ui/react';
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
		],
	},
];

const Comunidad = () => {
	return (
		<Box bg='#f1f1f1' minH='100vh' mb='10'>
			<HeaderComunidad />
			<>
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
			</>
		</Box>
	);
};

export default Comunidad;
