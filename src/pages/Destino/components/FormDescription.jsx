import { Stack, Text, Box, Heading } from '@chakra-ui/react'; 
import FormOptionRF from './FormOptionRF';

const FormDescription = () => {
	return (
		<Stack
			position=' absolute'
			top='2rem'
			left='0'
			right='0'
			width='fit-content'
			margin='0 auto'
			px={6}
			alignItems={'center'}
		>
			<Box textAlign='center' mb={4}>
				<Heading fontSize={{ base: '4xl', md: '5xl' }} color='#fff'>
					Viajá y Trabajá por el mundo!
				</Heading>
				<Text mt='2' color='#fafafa' fontSize={{ base: 'md', md: 'xl' }}>
					Selecioná tu nacionalidad y edad para consultar la disponibilidad de
					oportunidades para ti.
				</Text>
			</Box>
			<FormOptionRF />
		</Stack>
	);
};

export default FormDescription;
