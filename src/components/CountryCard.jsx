import { Stack, Image, Text } from '@chakra-ui/react';
import { handleScrollToTop } from '../utils';

const CountryCard = ({ url, flagUrl, title, id }) => {
	return (
		<Stack
			onClick={handleScrollToTop}
			bg='#fff'
			borderRadius={'3xl'}
			boxShadow='md'
			width='175px'
			_hover={{
				boxShadow: 'dark-lg',
			}}
		>
			<Image
				borderTopRadius={'2xl'}
				alt={title}
				maxWidth='none'
				src={url}
				height='150px'
			/>
			<Stack direction='row' p={4} spacing={2} align='center' justify='center'>
				<Image src={flagUrl} alt={`${title} Flag`} width='20px' height='17px' />
				<Text
					fontWeight='semibold'
					textTransform='capitalize'
					color='primary.granate'
				>
					{title}
				</Text>
			</Stack>
		</Stack>
	);
};

export default CountryCard;
