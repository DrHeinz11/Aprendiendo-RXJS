import { Heading, Stack } from '@chakra-ui/react';
import FormService from './FormService';

const Seguros = () => {
	return (
		<Stack
			bg='#E1E1E6'
			borderRadius='lg'
			boxShadow='md'
			w={{ base: 'full' ,md: 'container.md', lg: 'container.lg' }}
			minH='50vh'
			margin='0 auto'
		>
			<FormService/>
		</Stack>
	);
};

export default Seguros;
