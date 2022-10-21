import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { CustomButtonOnly } from '../../../../components';

const CardCurso = ({ details, title }) => {
	return (
		<Stack alignItems={'center'} bg='#eef1f6' py='10' borderRadius='sm' boxShadow='md'>
			<Heading color='#7d35c0'>{title}</Heading>
			<Stack w='full'>
				{details.map(elem => (
					<Box key={elem.id}>
						<Text fontSize='xl'>{elem.text}</Text>
						<Text fontWeight='bold' fontSize='lg'>
							{elem.bold}
						</Text>
					</Box>
				))}
			</Stack>
			<CustomButtonOnly>
				<Text>Me interesa!</Text>
			</CustomButtonOnly>
		</Stack>
	);
};

export default CardCurso;
