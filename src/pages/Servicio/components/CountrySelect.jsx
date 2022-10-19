import { ChevronDownIcon } from '@chakra-ui/icons';
import { Stack, Heading, Image } from '@chakra-ui/react';

const CountrySelect = ({ text, imgUrl, imgAlt }) => {
	return (
		<Stack
			borderRadius='md'
			p='4'
			alignItems='center'
			textAlign='center'
			color='primary.darkGranate'
			boxShadow='md'
			bg='#fdfdfd'
			justifyContent='space-between'
			h='60'
			_hover={{ color: '#8b006c', boxShadow: 'xl' }}
			cursor='pointer'
		>
			<Image src={imgUrl} alt={imgAlt} boxSize={{ base: '88px', md: '92px' }} />
			<Heading fontSize='xl'>{text}</Heading>
			<ChevronDownIcon boxSize={42} color='current' />
		</Stack>
	);
};

export default CountrySelect;
