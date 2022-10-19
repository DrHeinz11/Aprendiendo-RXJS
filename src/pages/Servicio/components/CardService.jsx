import { Grid, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CardService = ({ children, service }) => {
	const [focus, setFocus] = useState(false);
	const handleFocusClick = () => setFocus(prev => !prev);
	return (
		<Grid
			w='fit-content'
			cursor='pointer'
			placeContent='center'
			px={{ base: 9, md: 24 }}
			py={{ base: 3, md: 6 }}
			boxShadow={focus ? '2xl' : 'md'}
			borderRadius='xl'
			color={focus ? '#fff' : 'primary.darkGranate'}
			backgroundColor={focus ? 'primary.darkGranate' : '#fafafa'}
			onClick={handleFocusClick}
			_hover={{
				backgroundColor: 'primary.lightGranate',
				color: '#fff',
				fill: '#fff',
			}}
		>
			<HStack>
				<>{children}</>
				<Heading fontSize='xl'>{service}</Heading>
			</HStack>
		</Grid>
	);
};

export default CardService;
