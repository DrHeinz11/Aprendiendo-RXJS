import { Stack, Heading } from '@chakra-ui/react';
import { Carrousel } from '../../../components/index';
import CustomButtomRoute from '../../../components/custom/CustomButtonRoute';

const CountrySection = () => {
	return (
		<>
			<Stack
				direction='column'
				spacing={4}
				align='center'
				maxWidth={'100%'}
				px={2}
			>
				<Heading
					textAlign='center'
					weight='black'
					fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
					lineHeight='1.15'
					color={'primary.darkGranate'}
				>
					Conocé todos los destinos Working Holiday
				</Heading>
				<Carrousel />
				<CustomButtomRoute route='/destinos/' textButton='Ver más destinos' />
			</Stack>
		</>
	);
};

export default CountrySection;
