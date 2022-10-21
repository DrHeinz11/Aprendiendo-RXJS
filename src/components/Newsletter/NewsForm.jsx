import { chakra } from '@chakra-ui/react';
const NewsForm = () => {
	const handleSubmit = event => {
		event.preventDefault();
	};
	return (
		<chakra.form
			display='flex'
			direction='row'
			alignItems='center'
			justifyContent='center'
			flexWrap='wrap'
			gap='4'
			zIndex='100'
			onSubmit={event => handleSubmit(event)}
		>
			<chakra.input
				p='4'
				borderRadius='xl'
				bg='#fafafa'
				color='#000'
				fontSize='xl'
				fontWeight='bold'
				type='text'
				required
				placeholder='Nombre*'
				_placeholder={{ color: '#c1c1c1' }}
			/>
			<chakra.input
				p='4'
				h='fit-content'
				borderRadius='xl'
				bg='#fafafa'
				color='#000'
				fontSize='xl'
				fontWeight='bold'
				type='email'
				required
				placeholder='Email*'
				_placeholder={{ color: '#c1c1c1' }}
			/>
			<chakra.select
				cursor='pointer'
				h='fit-content'
				fontSize='xl'
				fontWeight='bold'
				px='6'
				py='4'
				borderRadius='xl'
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
				bg='primary.pinkChicle'
				_hover={{ bg: '#d40031' }}
				px='10'
				py='4'
				borderRadius='xl'
				textTransform='initial'
				fontSize={{ base: 'lg', md: 'xl' }}
				fontWeight='bold'
				color='white'
				type='submit'
			>
				Enviar
			</chakra.button>
		</chakra.form>
	);
};

export default NewsForm;
