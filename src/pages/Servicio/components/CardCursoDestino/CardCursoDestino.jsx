import { Grid, Heading, HStack, Image, Stack } from '@chakra-ui/react';

const CardCursoDestino = ({ children, heading, imgUrl }) => {
	return (
		<Stack
			gap='4'
			as='section'
			p={{ base: 2, md: 10 }}
			alignItems='center'
			textAlign='center'
			w='full'
		>
			<HStack spacing='4' aling='center'>
				<Image boxSize='68px' src={imgUrl} alt={`${heading}-flag`} />
				<Heading fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}>
					{heading}
				</Heading>
			</HStack>
			<Grid
				w='full'
				gap='4'
				gridTemplateColumns={{
					base: 'repeat(auto-fit,minmax(250px,1fr))',
					lg: 'repeat(auto-fill,minmax(350px,1fr))',
				}}
			>
				<>{children}</>
			</Grid>
		</Stack>
	);
};

export default CardCursoDestino;
