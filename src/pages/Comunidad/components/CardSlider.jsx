import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../../utils';

const CardSlider = ({ imgUrl, imgAlt, headTitle, title }) => {
	return (
		<Link to={`/blog/${imgAlt}`} onClick={handleScrollToTop}>
			<Stack
				borderRadius='lg'
				boxShadow='md'
				w='275px'
				minH='280px'
				_hover={{ boxShadow: 'lg' }}
			>
				<Image
					src={imgUrl}
					alt={imgAlt}
					borderTopRadius='xl'
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
					flex='1'
				>
					<Text borderRadius='sm' bg='whiteAlpha.100' w='fit-content' px='2' textTransform='uppercase' fontWeight='light' fontSize='sm'>
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
		</Link>
	);
};

export default CardSlider;
