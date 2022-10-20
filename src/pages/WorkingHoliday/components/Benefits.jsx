import { Heading, Stack, Text } from '@chakra-ui/react';
import { CustomButtonOnly } from '../../../components/custom';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../../utils';

const Benefits = () => {
	return (
		<Stack
			className='box__container'
			bg='#00dbd021'
			align='center'
			spacing='4'
			py='24'
			textAlign='center'
		>
			<Heading color='primary.granate'>
				¡Ahora es tu momento! Conocé todos los destinos
			</Heading>
			<CustomButtonOnly >
				<Link to='/destinos/' onClick={handleScrollToTop}>
					<Text>Comenzá tu viaje</Text>
				</Link>
			</CustomButtonOnly>
		</Stack>
	);
};

export default Benefits;
