import { Box, Heading, chakra, Stack, Text } from '@chakra-ui/react';
import { CustomButtonOnly } from '../../../../components';

const CardCurso = ({ details, title }) => {
	return (
		<Stack
			alignItems={'center'}
			bg='#eef1f6'
			py='10'
			borderRadius='sm'
			boxShadow='md'
			gap='2'
		>
			<Heading color='#7d35c0'>{title}</Heading>
			<Box w='full'>
				{details.map(elem => (
					<Text fontSize='xl' key={elem.id}>
						{elem.text} :{' '}
						<chakra.span fontWeight='bold' fontSize='lg'>
							{elem.bold}
						</chakra.span>
					</Text>
				))}
			</Box>
			<CustomButtonOnly>
				<Text>Me interesa!</Text>
			</CustomButtonOnly>
		</Stack>
	);
};

export default CardCurso;
