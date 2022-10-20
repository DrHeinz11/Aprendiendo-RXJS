import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';

const HeadingSection = () => {
	return (
		<HStack
			flexWrap={{ base: 'wrap', md: 'nowrap' }}
			align='center'
			justify='center'
			width={{ base: 'full', md: 'container.lg' }}
		>
			<Box textAlign='start' color='primary.granate'>
				<Heading pr={{ base: 0, md: 20 }} fontSize='5xl' mb='4'>
					Animate a viajar y trabajar en el exterior
				</Heading>
				<Text fontWeight='medium'>
					Las visas working holiday son un tipo de visa que te permite viajar a
					un destino con el fin de trabajar y recorrer el país durante 1 año.
					Vas a poder ahorrar dinero, conocer gente de todo el mundo, viajar
					mucho, y lo mejor de todo, podés armar todo el viaje vos mismo.
				</Text>
			</Box>
			<Image
				boxSize='22rem'
				src='https://www.yomeanimo.com/wp-content/uploads/2021/03/animate-a-viajar-y-trabajar.svg'
				alt='Animate'
			/>
		</HStack>
	);
};

export default HeadingSection;
