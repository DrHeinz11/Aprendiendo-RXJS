import { chakra, Heading } from '@chakra-ui/react';
import '../../components/custom/CustomBox.css';

const WorkingHoliday = () => {
	return (
		<chakra.div
			textAlign='center'
			color='primary.granate'
			w='full'
			h={{ base: '50vh', md: '100vh' }}
		>
			<Heading>¿Qué es una VISA Working Holiday?</Heading>
		</chakra.div>
	);
};

export default WorkingHoliday;
