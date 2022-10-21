import { ChevronDownIcon } from '@chakra-ui/icons';
import { Stack, Heading, Image } from '@chakra-ui/react';

const CountrySelect = ({ value, imgUrl, imgAlt, setSelected, id }) => {
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
			onClick={() => setSelected({ id, value, imgUrl })}
		>
			<Image src={imgUrl} alt={imgAlt} boxSize={{ base: '88px', md: '92px' }} />
			<Heading fontSize='xl'>{value}</Heading>
			<ChevronDownIcon boxSize={42} color='current' />
		</Stack>
	);
};

export default CountrySelect;
