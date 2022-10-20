import { Image, Heading, Text, Box, Stack } from '@chakra-ui/react';

const InfoBox = ({ imgUrl, imgAlt, heading, paragraph, id }) => {
	return (
		<Stack
			area={{ base: 'none', md: `box-${id}` }}
			margin='0 !important'
			w='full'
			height='full'
			align='center'
			p='4'
			maxW='450px'
			gap='2'
			textAlign={{ base: 'center', lg: 'start' }}
		>
			<Image boxSize='16rem' objectFit='fill' src={imgUrl} alt={imgAlt} />
			<Box color='primary.darkGranate'>
				<Heading fontSize='3xl' mb='4'>
					{heading}
				</Heading>
				<Text fontSize='md' fontWeight={'medium'}>
					{paragraph}
				</Text>
			</Box>
		</Stack>
	);
};

export default InfoBox;
