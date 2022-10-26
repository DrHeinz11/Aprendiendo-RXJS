import { Box, Heading, chakra, HStack } from '@chakra-ui/react';
import React from 'react';

const SliderHeader = ({ number, title }) => {
	return (
		<Heading textAlign='center' mr='4'>
			<chakra.span fontSize='4xl' fontWeight='bold' color='primary.darkAqua'>
				{number}.
			</chakra.span>{' '}
			{title}
		</Heading>
	);
};

export default SliderHeader;
