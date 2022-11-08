import { Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const CountryHeading = ({ info, subInfo }) => {
	return (
		<Stack
		flex='1 0 350px'
			spacing='0'
			px='2'
			gap='4'
			textAlign='start'
		>
			<Heading
				color='primary.darkGranate'
				fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '4xl', '2xl': '5xl' }}
			>
				{info}
			</Heading>
			<Text>{subInfo}</Text>
		</Stack>
	);
};

export default CountryHeading;
