import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { CustomBox } from '../../../components';
import { BackgroundCustomBox } from '../../../constants';
import { transformParams } from '../../../utils/transformParams';
import ServicioHome from '../ServicioHome';
import CountrySelect from './CountrySelect';
const dataDestino = [
	{
		imgUrl: 'https://www.yomeanimo.com/wp-content/uploads/2021/06/sasa.svg',
		imgAlt: 'Malta',
		text: 'Malta',
		id: 1,
	},
	{
		imgUrl:
			'https://www.yomeanimo.com/wp-content/uploads/2021/06/Grupo-865.svg',
		imgAlt: 'Canadá',
		text: 'Canadá',
		id: 2,
	},
	{
		imgUrl:
			'https://www.yomeanimo.com/wp-content/uploads/2021/04/flag-spain.svg',
		imgAlt: 'España',
		text: 'España',
		id: 3,
	},
	{
		imgUrl:
			'https://www.yomeanimo.com/wp-content/uploads/2021/06/Grupo-881.svg',
		imgAlt: 'Ireland',
		text: 'Ireland',
		id: 4,
	},
];
const Servicio = () => {
	const { id } = useParams();

	return (
		<>
			<CustomBox
				background={BackgroundCustomBox}
				align={'center'}
				sizes={{ height: '45vh' }}
			>
				<Box textAlign='center' mb={4}>
					<Heading
						fontSize={{ base: '4xl', md: '5xl' }}
						textTransform='capitalize'
						color='#fff'
					>
						{transformParams()}
					</Heading>
					<Text mt='2' color='#fafafa' fontSize={{ base: 'md', md: 'xl' }}>
						Selecioná tu nacionalidad para consultar la disponibilidad.
					</Text>
				</Box>
			</CustomBox>
			<Stack
				w='full'
				minH='100vh'
				bg='#f1f1f1'
				align='center'
				mt={{ base: 2, sm: 20 }}
				color='primary.darkGranate'
				textAlign='center'
				gap='10'
				py={{ base: '10', md: '20' }}
				position='relative'
			>
				<HStack
					justify='center'
					flexWrap='wrap-reverse'
					gap='2'
					w='full'
					margin='0 auto'
					position={{ base: 'static', sm: 'absolute' }}
					top={{ base: 'none', sm: '-35px' }}
				>
					<ServicioHome />
				</HStack>
				<Box w={{ base: 'full', lg: 'container.lg' }}>
					<Heading color='primary.darkGranate'>
						Estudia y trabaja en el exterior
					</Heading>
					<Text px={{ base: '6', md: '10' }} mt='4' fontSize='xl'>
						¿Estás interesado en ir a estudiar afuera, ya sea a perfeccionar el
						idioma o hacer algún diplomado?. Las visas de estudiantes tienen la
						ventaja de que se pueden obtener en cualquier momento del año, no
						tienen límite de edad, o los habilitan a trabajar legalmente en el
						país!
					</Text>
				</Box>

				<Box w='full' minH='100vh'>
					<Heading>Elegí tu destino</Heading>
					<Grid
						gridTemplateColumns={'repeat(auto-fill,minmax(155px,1fr))'}
						gap={4}
						w={{ base: 'full', md: 'container.md' }}
						margin='0 auto'
						p='8'
					>
						{dataDestino.map(element => (
							<CountrySelect
								imgUrl={element.imgUrl}
								imgAlt={element.imgAlt}
								text={element.text}
								key={element.id}
							/>
						))}
					</Grid>
				</Box>
			</Stack>
		</>
	);
};

export default Servicio;
