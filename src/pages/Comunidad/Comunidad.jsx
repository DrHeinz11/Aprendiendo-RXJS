import { Box, Grid } from '@chakra-ui/react';
import CardSlider from './components/CardSlider';
import HeaderComunidad from './components/HeaderComunidad';

const Comunidad = () => {
	return (
		<Box bg='#f1f1f1' minH='100vh' mb='10'>
			<HeaderComunidad />
			<Grid
				gridTemplateColumns='repeat(auto-fill,minmax(250px,1fr))'
				w='full'
				gap='4'
				px='10'
				my='16'
			>
				<CardSlider
					imgUrl='https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg'
					imgAlt='voluntariado-por-el-mundo'
					headTitle='tips de viaje'
					title='5 formas de hacer voluntariados y viajar por el mundo'
				/>
				<CardSlider
					imgUrl='https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg'
					imgAlt='voluntariado-por-el-mundo'
					headTitle='tips de viaje'
					title='5 formas de hacer voluntariados y viajar por el mundo'
				/>
				<CardSlider
					imgUrl='https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg'
					imgAlt='voluntariado-por-el-mundo'
					headTitle='tips de viaje'
					title='5 formas de hacer voluntariados y viajar por el mundo'
				/>
				<CardSlider
					imgUrl='https://www.yomeanimo.com/wp-content/uploads/2021/11/voluntariado-por-el-mundo.jpg'
					imgAlt='voluntariado-por-el-mundo'
					headTitle='tips de viaje'
					title='5 formas de hacer voluntariados y viajar por el mundo'
				/>
			</Grid>
		</Box>
	);
};

export default Comunidad;
