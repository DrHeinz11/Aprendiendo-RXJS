import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const CourseHeading = () => {
	return (
		<>
			<Heading color='primary.darkGranate'>
				Estudia y trabaja en el exterior
			</Heading>
			<Text px={{ base: '4', md: '10' }} mt='4' fontSize='xl'>
				¿Estás interesado en ir a estudiar afuera, ya sea a perfeccionar el
				idioma o hacer algún diplomado?. Las visas de estudiantes tienen la
				ventaja de que se pueden obtener en cualquier momento del año, no tienen
				límite de edad, o los habilitan a trabajar legalmente en el país!
			</Text>
		</>
	);
};

export default CourseHeading;
