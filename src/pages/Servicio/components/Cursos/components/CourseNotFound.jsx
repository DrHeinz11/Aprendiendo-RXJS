import { Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const CourseNotFound = ({ imgUrl, imgAlt }) => {
	return (
		<HStack alignItems='center' spacing='0' w='container.md' margin='0 auto'>
			<Heading mt='15' textAlign='center'>
				En este momento no se encuentran ofertas academicas para este pais
			</Heading>
			<Image boxSize='68px' src={imgUrl} alt={imgAlt} />
		</HStack>
	);
};

export default CourseNotFound;
