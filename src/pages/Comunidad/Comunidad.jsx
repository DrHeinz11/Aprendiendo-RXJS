import { Box, Stack } from '@chakra-ui/react';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import { dataComunity } from '../../constants/dataCommunity/dataComunity';
import CardSlider from './components/CardSlider';
import HeaderComunidad from './components/HeaderComunidad';

const Comunidad = () => {
	return (
		<Box bg='#f1f1f1' minH='100vh'>
			<HeaderComunidad />
			<Stack py='20' px='10' gap='14'>
				{dataComunity?.map(element => (
					<CustomSlider
						key={element.number}
						number={element.number}
						title={element.title}
					>
						{element?.blog?.map(element => (
							<CardSlider
								key={element.id}
								id={element.number}
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
