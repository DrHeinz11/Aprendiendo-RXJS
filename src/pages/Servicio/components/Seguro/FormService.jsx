import { Button, chakra, HStack, Stack, Text } from '@chakra-ui/react';
import { useRef } from 'react';
const FormService = () => {
	const OrigenRef = useRef();
	const DestinoRef = useRef();

	const HandleSubmit = ev => ev.preventDefault();
	return (
		<chakra.form
			p='8'
			display={'flex'}
			gap={{ base: 2, md: 4 }}
			flexWrap='wrap'
			justifyContent='center'
			onSubmit={ev => HandleSubmit(ev)}
		>
			<HStack as='label' justify='flex-start' gap='4' w='full' flexWrap='wrap'>
				<chakra.input
					fontWeight='semibold'
					borderRadius='md'
					px='4'
					py='3.5'
					color='primary.darkGranate'
					placeholder='Nombre y Apellido'
					_placeholder={{ color: 'primary.darkGranate', opacity: 0.75 }}
					_focusVisible={{ outline: 0 }}
					type='text'
					flex='1'
					required
				/>
				<chakra.input
					flex='1'
					fontWeight='semibold'
					borderRadius='md'
					px='4'
					py='3.5'
					color='primary.darkGranate'
					_placeholder={{ color: 'primary.darkGranate', opacity: 0.75 }}
					_focusVisible={{ outline: 0 }}
					placeholder='Email'
					type='email'
					margin='0 !important'
					required
				/>
				<chakra.input
					fontWeight='semibold'
					borderRadius='md'
					px='4'
					py='3.5'
					color='primary.darkGranate'
					_placeholder={{ color: 'primary.darkGranate', opacity: 0.75 }}
					_focusVisible={{ outline: 0 }}
					placeholder='Edad'
					type='number'
					min={10}
					max={100}
					w='6rem'
					margin='0 !important'
					required
				/>
			</HStack>
			<HStack
				as='label'
				justify='space-evenly'
				gap='4'
				w='full'
				flexWrap='wrap'
			>
				<chakra.select
					flex='1'
					borderRadius='md'
					px='4'
					py='3.5'
					bg='primary.lightGranate'
					color='white'
					fontWeight='semibold'
					name='origen'
					ref={OrigenRef}
					_focusVisible={{ outline: 0 }}
					cursor='pointer'
					required
				>
					<chakra.option>Origen(País)</chakra.option>
					<chakra.option value='argentina'>Argentina</chakra.option>
					<chakra.option value='uruguay'>Uruguay</chakra.option>
					<chakra.option value='chile'>Chile</chakra.option>
					<chakra.option value='paraguay'>Paraguay</chakra.option>
				</chakra.select>
				<chakra.select
					flex='1'
					borderRadius='md'
					px='4'
					py='3.5'
					bg='primary.lightGranate'
					color='white'
					fontWeight='semibold'
					name='destion'
					_focusVisible={{ outline: 0 }}
					cursor='pointer'
					margin='0 !important'
					ref={DestinoRef}
					required
				>
					<chakra.option>Destino(País)</chakra.option>
					<chakra.option value='australia'>Australia</chakra.option>
					<chakra.option value='newzealand'>New Zealand</chakra.option>
					<chakra.option value='denmark'>Denmark</chakra.option>
					<chakra.option value='netherland'>Netherland</chakra.option>
				</chakra.select>
			</HStack>
			<HStack
				p='4'
				bg='#cfcfe1'
				w='full'
				flexWrap='wrap'
				borderRadius='lg'
				align='flex-end'
				gap='2'
			>
				<Stack as='label' flex='1'>
					<Text pl='2' fontSize='sm' fontWeight='light'>
						Fecha de viaje
					</Text>
					<chakra.input
						type='date'
						cursor='pointer'
						borderRadius='md'
						px='4'
						py='3.5'
						border=' 2px solid primary.darkGranate'
						fontWeight='semibold'
						name='destion'
						_focusVisible={{ outline: 0 }}
						required
					/>
				</Stack>
				<Stack as='label' flex='1' margin='0 !important'>
					<Text pl='2' fontSize='sm' fontWeight='light'>
						Duración
					</Text>
					<chakra.select
						borderRadius='md'
						px='4'
						py='.95rem'
						bg='primary.lightGranate'
						color='white'
						fontWeight='semibold'
						name='destion'
						_focusVisible={{ outline: 0 }}
						cursor='pointer'
						required
					>
						<chakra.option>Elegir duración</chakra.option>
						<chakra.option value='15-dias'>15 Días</chakra.option>
						<chakra.option value='30-dias'>30 Días</chakra.option>
						<chakra.option value='45-das'>45 Días</chakra.option>
						<chakra.option value='60-dias'>60 Días</chakra.option>
						<chakra.option value='120-dias'>120 Días</chakra.option>
					</chakra.select>
				</Stack>
				<HStack
					px='4'
					py='3.5'
					color='#000'
					fontWeight='semibold'
					as='label'
					gap='1'
					flex='1'
					flexBasis={'138px'}
					cursor='pointer'
				>
					<chakra.input
						boxSize={4}
						_focusVisible={{ outline: 0 }}
						type='checkbox'
						value='incourse'
					/>
					<Text>Ya estoy de viaje</Text>
				</HStack>{' '}
			</HStack>
			<HStack
				px='4'
				py='3.5'
				color='#000'
				fontWeight='medium'
				as='label'
				gap='2'
				cursor='pointer'
			>
				<chakra.input
					boxSize={5}
					_focusVisible={{ outline: 0 }}
					type='checkbox'
					value='incourse'
				/>
				<Text>Quiero que me contacten por telefono.</Text>
			</HStack>
			<Button
				size='lg'
				_hover={{ backgroundColor: '#b10029' }}
				type='submit'
				color='#fff'
				bg='primary.pinkChicle'
			>
				Cotizar ahora!
			</Button>
		</chakra.form>
	);
};

export default FormService;
