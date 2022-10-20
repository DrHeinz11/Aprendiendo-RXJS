import { Stack, Image, Heading, Text, Box } from '@chakra-ui/react';

const InfoBox = ({ imgUrl, imgAlt, heading, paragraph }) => {
	return (
		<Stack margin='0 !important' as='article' w='22rem' h='26rem' align='center' p='4' gap='2'>
			<Image boxSize='16rem' objectFit='fill' src={imgUrl} alt={imgAlt} />
			<Box color='primary.darkGranate'>
				<Heading fontSize='3xl' mb='4'>{heading}</Heading>
				<Text fontSize='md' fontWeight={'medium'}>{paragraph}</Text>
			</Box>
		</Stack>
	);
};

export default InfoBox;
