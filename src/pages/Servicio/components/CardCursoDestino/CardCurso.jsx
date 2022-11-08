import { Box, Heading, chakra, Stack, Text } from '@chakra-ui/react';
import { CustomButtonOnly } from '../../../../components';

const CardCurso = ({ details, title }) => {
	return (
		<Stack
			alignItems={'center'}
			bg='#f3f3f3'
			py='10'
			borderRadius='sm'
			boxShadow='md'
			gap='4'
			justifyContent={'space-between'}
		>
			<Heading fontSize='3xl' color='primary.darkGranate'>
				{title}
			</Heading>
			<Box w='full' textAlign='center'>
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
