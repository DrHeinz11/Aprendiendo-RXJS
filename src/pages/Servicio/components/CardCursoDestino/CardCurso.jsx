import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { CustomButtonOnly } from '../../../../components';

const CardCurso = ({ props: { value, dataCurso } }) => {
	return (
		<Stack
			as='article'
			bg='#c1c1c1'
			borderRadius='md'
			boxShadow='sm'
			p='10'
			alignItems='center'
			textAlign='center'
		>
			<Box>
				<Heading>{value}</Heading>
				{dataCurso?.map(curso => (
					<Text key={curso.id}>
						{curso.text}
						{curso.bold && <Text fontWeight={'Bold'}>{curso.bold}</Text>}
					</Text>
				))}
			</Box>
			<CustomButtonOnly>
				<Heading>Me interesa!</Heading>
			</CustomButtonOnly>
		</Stack>
	);
};

export default CardCurso;
