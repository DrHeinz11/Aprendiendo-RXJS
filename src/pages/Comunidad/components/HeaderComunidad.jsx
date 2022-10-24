import { Heading, Stack, Text } from '@chakra-ui/react';
import { CustomBox } from '../../../components';

const HeaderComunidad = () => {
	return (
		<Stack positon='column' justify='center' alignItems='center'>
			<CustomBox
				background={{
					base: 'https://www.yomeanimo.com/wp-content/uploads/2021/05/Grupo-1916@2x.png',
					md: 'https://www.yomeanimo.com/wp-content/uploads/2021/05/Grupo-1916@2x.png',
				}}
				sizes={{ height: { base: '55vh' } }}
			/>
			<Stack
				maxWidth='1000px'
				margin='0 auto'
				spacing={5}
				px={{ base: 4, md: 10 }}
				position='absolute'
				textAlign='center'
				color='#fff'
			>
				<Heading lineHeight='1.15' px='10' fontSize={{ base: '4xl', md: '6xl' }}>
					Viajero Tips de la comunidad
				</Heading>
				<Text fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }} fontWeight='500'>
					Los mejores tips de miles de Yomeanimers que te ayudara a que tu viaje
					sea inolvidable!
				</Text>
			</Stack>
		</Stack>
	);
};

export default HeaderComunidad;
