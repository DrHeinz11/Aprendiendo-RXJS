import { Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import NewsForm from './NewsForm';

const NewsLetter = () => {
	return (
		<Stack
			spacing={4}
			justifyContent='center'
			textAlign='center'
			w='full'
			h={{ base: 'auto', lg: 'xs' }}
			position='relative'
			bg='primary.darkAqua'
			py='10'
			px='2'
		>
			<Image
				boxSize={'28rem'}
				src='https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/trama-nl-desktop.svg'
				alt='TramaBackground'
				position='absolute'
				top='0'
				bottom='0'
				left='0'
				zIndex='10'
			/>
			<Heading zIndex='100'>Recibí las últimas novedades</Heading>
			<Text zIndex='100' fontSize='2xl' fontWeight='medium'>
				Armá tu propio viaje de Working Holiday
			</Text>
			<NewsForm />
		</Stack>
	);
};

export default NewsLetter;
