import { Box, chakra, Heading } from '@chakra-ui/react';

const SliderHeader = ({ number, title }) => {
	return (
		<Box zIndex={100} maxW='275px' textAlign={{ base: 'center', md: 'start' }}>
			<Heading mr='4'>
				<chakra.span fontSize='4xl' fontWeight='bold' color='primary.darkAqua'>
					{number}.
				</chakra.span>{' '}
				{title}
			</Heading>
		</Box>
	);
};

export default SliderHeader;
