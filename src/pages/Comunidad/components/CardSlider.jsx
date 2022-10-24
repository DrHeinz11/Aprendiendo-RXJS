import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

const CardSlider = ({ imgUrl, imgAlt, headTitle, title }) => {
	return (
		<Stack borderRadius='lg' boxShadow='md' w='275px'>
			<Image
				src={imgUrl}
				alt={imgAlt}
				borderTopRadius='lg'
				objectFit='cover'
				objectPosition='center'
			/>
			<Box
				bg='primary.darkGranate'
				color='#f1f1f1'
				p='4'
				textAlign='start'
				borderBottomRadius={'lg'}
				margin='0 !important'
			>
				<Text textTransform='uppercase' fontWeight='light' fontSize='sm'>
					{headTitle}
				</Text>
				<Heading
					mt='2'
					textTransform='capitalize'
					fontSize='lg'
					fontWeight='semibold'
				>
					{title}
				</Heading>
			</Box>
		</Stack>
	);
};

export default CardSlider;
