import { chakra, HStack } from '@chakra-ui/react';
const NewsForm = () => {
	const handleSubmit = event => {
		event.preventDefault();
	};
	return (
		<HStack
			as='form'
			maxW={{ base: '90%', md: '80%' }}
			alignItems='center'
			justifyContent='center'
			flexWrap='wrap'
			gap='4'
			zIndex='100'
			spacing='none'
			onSubmit={event => handleSubmit(event)}
		>
			<chakra.input
				flex='1'
				minW={{ base: 'none', sm: '300px' }}
				p='4'
				borderRadius='xl'
				bg='#fafafa'
				color='#000'
				fontSize='md'
				fontWeight='bold'
				type='text'
				required
				placeholder='Nombre*'
				_placeholder={{ color: '#c1c1c1' }}
				_focusVisible={{ outline: 0 }}
			/>
			<chakra.input
				flex='1'
				minW={{ base: 'none', sm: '300px' }}
				p='4'
				h='fit-content'
				borderRadius='xl'
				bg='#fafafa'
				color='#000'
				fontSize='md'
				fontWeight='bold'
				type='email'
				required
				placeholder='Email*'
				_placeholder={{ color: '#c1c1c1' }}
				_focusVisible={{ outline: 0 }}
			/>
			<chakra.select
				flex='1'
				cursor='pointer'
				h='fit-content'
				fontSize='md'
				fontWeight='bold'
				px='4'
				py='4'
				borderRadius='xl'
				_focusVisible={{ outline: 0 }}
			>
				<chakra.option cursor='pointer' value='argentina'>
					Argentina
				</chakra.option>
				<chakra.option cursor='pointer' value='chile'>
					Chile
				</chakra.option>
				<chakra.option cursor='pointer' value='uruguay'>
					Uruguay
				</chakra.option>
				<chakra.option cursor='pointer' value='brasil'>
					Brasil
				</chakra.option>
			</chakra.select>
			<chakra.button
				flex='1'
				bg='primary.pinkChicle'
				_hover={{ bg: '#d40031' }}
				px='10'
				py='4'
				borderRadius='xl'
				textTransform='initial'
				fontSize={{ base: 'md', md: 'lg' }}
				fontWeight='bold'
				color='white'
				type='submit'
				_focusVisible={{ outline: 0 }}
			>
				Subscribe!
			</chakra.button>
		</HStack>
	);
};

export default NewsForm;
