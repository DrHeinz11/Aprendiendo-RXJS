import { Button, chakra, HStack, Stack, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useDestinoContext } from '../context/context';

const FormOptionRF = () => {
	const formRef = useRef();
	const { setDestino, dataFormDestino, dataFormAge } = useDestinoContext();

	const handleSubmit = ev => {
		ev.preventDefault();
		setDestino({
			id: formRef.current[0].value,
			age: formRef.current[1].value,
			passport: formRef.current[2].checked,
		});
	};

	return (
		<HStack
			as='form'
			ref={formRef}
			onSubmit={ev => handleSubmit(ev)}
			alignContent='center'
			px='8'
			py='12'
			gap='4'
			wrap='wrap'
			bg='primary.lightGranate'
			borderRadius='3xl'
			boxShadow='0px 2px 10px rgba(255,255,255,0.25)'
		>
			<Stack as='label' cursor='pointer' flex='1'>
				<Text pl='2' fontSize='md' fontWeight='bold' color='#f1f1f1'>
					Country
				</Text>
				<chakra.select
					flex='1'
					borderRadius='xl'
					px='4'
					py='3.5'
					bg='#fff'
					color='#010101'
					fontWeight='semibold'
					name='country'
					_focusVisible={{ outline: 0 }}
					cursor='pointer'
					required
				>
					<chakra.option>Select your country</chakra.option>
					{dataFormDestino.map(element => (
						<chakra.option
							key={element.key}
							data-country={element.country}
							value={element.id}
						>
							{element.country}
						</chakra.option>
					))}
				</chakra.select>
			</Stack>

			<Stack as='label' cursor='pointer' flex='1' margin='0 !important'>
				<Text pl='2' fontSize='md' fontWeight='bold' color='#f1f1f1'>
					Age
				</Text>
				<chakra.select
					flex='1'
					borderRadius='xl'
					px='4'
					py='3.5'
					bg='#fff'
					color='#010101'
					fontWeight='semibold'
					name='country'
					_focusVisible={{ outline: 0 }}
					cursor='pointer'
					required
				>
					<chakra.option>Select your Age</chakra.option>
					{dataFormAge.map(element => (
						<chakra.option
							key={element.key}
							id={element.id}
							value={element.value}
						>
							{element.heading}
						</chakra.option>
					))}
				</chakra.select>
			</Stack>

			<HStack as='label' cursor='pointer'>
				<chakra.input boxSize='5' cursor='pointer' type='checkbox' />
				<Text fontSize='lg' fontWeight='semibold' color='#f1f1f1'>
					Tengo pasaporte europeo
				</Text>
			</HStack>

			<Button
				flex='1'
				flexBasis='145px'
				type='submit'
				size='lg'
				bg='primary.pinkChicle'
				color='#fff'
				_hover={{ backgroundColor: 'red.600' }}
			>
				Consultar!
			</Button>
		</HStack>
	);
};

export default FormOptionRF;
