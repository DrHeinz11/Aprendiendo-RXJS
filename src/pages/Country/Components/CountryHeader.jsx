import { Heading, HStack, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { CustomBox } from '../../../components';

const CountryHeader = ({ title,background,flagImg }) => {
	return (
		<Stack positon='column' justify='center' alignItems='center'>
			<CustomBox
				background={{
					base: background,
					md: background,
				}}
				sizes={{ height: { base: '50vh' } }}
			/>
			<HStack
				maxWidth='1000px'
				margin='0 auto'
				spacing={0}
				px={{ base: 4, md: 10 }}
				position='absolute'
				textAlign='center'
				color='#fff'
				flexWrap='wrap-reverse'
			>
				<Heading
					lineHeight='1.15'
					px='10'
                    color='primary.darkGranate'
					fontSize={{ base: '4xl', md: '5xl' }}
				>
					{title}
				</Heading>
				<Image boxSize='68px' src={flagImg.imgUrl} alt={flagImg.imgAlt}/>
			</HStack>
		</Stack>
	);
};

export default CountryHeader;
