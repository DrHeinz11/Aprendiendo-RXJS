import { Grid, Heading, HStack, Image, Stack } from '@chakra-ui/react';

const CardCursoDestino = ({ children, heading, imgUrl }) => {
	return (
		<Stack
			gap='4'
			as='section'
			bg='#c1c1c1'
			borderRadius='sm'
			boxShadow='xs'
			p={{ base: 2, md: 10 }}
			alignItems='center'
			textAlign='center'
			w='full'
		>
			<HStack spacing='4' aling='center'>
				<Heading>{heading}</Heading>
				<Image boxSize='68px' src={imgUrl} alt={`${heading}-flag`} />
			</HStack>
			<Grid
				w='full'
				gap='4'
				gridTemplateColumns='repeat(auto-fill,minmax(350px,1fr))'
			>
				<>{children}</>
			</Grid>
		</Stack>
	);
};

export default CardCursoDestino;
