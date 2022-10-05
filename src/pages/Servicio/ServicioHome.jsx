import { Box } from '@chakra-ui/react';
import { CardService } from './components';
const ServicioHome = () => {
	return (
		<Box minH='100vh'>
			<CardService service={'Cursos'} />
		</Box>
	);
};

export default ServicioHome;
