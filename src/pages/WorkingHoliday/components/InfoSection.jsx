import {
	Box,
	Divider,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Text,
} from '@chakra-ui/react';
import InfoBox from './InfoBox';
const dataInfoBox = [
	{
		imgUrl:
			'https://www.yomeanimo.com/wp-content/uploads/2021/03/rango-de-edad.svg',
		imgAlt: 'Age-range',
		heading: 'Rango de Edad',
		paragraph: 'Entre 18 y 35 años de edad. Esto depende del destino',
		id: 1,
	},
	{
		imgUrl:
			'https://www.yomeanimo.com/wp-content/uploads/2021/03/pasaporte.svg',
		imgAlt: 'Location',
		heading: 'Lo más importante es el pasaporte',
		paragraph:
			'No importa donde vivas, para conseguir la visa importa que pasaporte tenes',
		id: 2,
	},
	{
		imgUrl: 'https://www.yomeanimo.com/wp-content/uploads/2021/03/duracion.svg',
		imgAlt: 'Calendar',
		heading: 'Duración de la visa',
		paragraph:
			'El máximo de tiempo es 1 año, pero podes hacerlo por menos tiempo también!',
		id: 3,
	},
	{
		imgUrl: 'https://www.yomeanimo.com/wp-content/uploads/2021/03/trabajo.svg',
		imgAlt: 'Work',
		heading: '¿Qué trabajo puedo realizar?',
		paragraph:
			'Podés buscar trabajo de lo que vos quieras! Como profesional, en un bar, en el campo, etc',
		id: 4,
	},
	{
		imgUrl:
			'https://www.yomeanimo.com/wp-content/uploads/2021/03/autogestion.svg',
		imgAlt: 'Managment',
		heading: '¡Lo gestionás vos mismo!',
		paragraph:
			'Todos los trámites de la visa los pueden realizar ustedes solos, siguiendo las guías que tenemos en la web!',
		id: 5,
	},
	{
		imgUrl: 'https://www.yomeanimo.com/wp-content/uploads/2021/03/destino.svg',
		imgAlt: 'Destino',
		heading: 'Una vez por destino',
		paragraph:
			'Podés obtenerlas 1 vez x destino, no podés repetir el mismo país!',
		id: 6,
	},
];

const GridAreas = `"box-1 divider box-2"
"box-3 divider box-4"
"box-5 divider box-6"`;

const InfoSection = () => {
	return (
		<HStack
			flexWrap='wrap'
			as='section'
			w='full'
			justify='center'
			px={{ base: 4, md: 10 }}
		>
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
						Las visas working holiday son un tipo de visa que te permite viajar
						a un destino con el fin de trabajar y recorrer el país durante 1
						año. Vas a poder ahorrar dinero, conocer gente de todo el mundo,
						viajar mucho, y lo mejor de todo, podés armar todo el viaje vos
						mismo.
					</Text>
				</Box>
				<Image
					boxSize='22rem'
					src='https://www.yomeanimo.com/wp-content/uploads/2021/03/animate-a-viajar-y-trabajar.svg'
					alt='Animate'
				/>
			</HStack>
			<Divider />
			<Grid
				// gridTemplateColumns={'1fr 0.5fr 1fr'}
				// gridTemplateRows={'1fr 1fr 1fr'}
				gridTemplateAreas={{ base: 'none', md: GridAreas }}
				w='full'
				height={'auto'}
				alignItems={'center'}
				justifyItems={'center'}
			>
				{dataInfoBox.map(element => (
					<InfoBox
						imgAlt={element.imgAlt}
						imgUrl={element.imgUrl}
						heading={element.heading}
						paragraph={element.paragraph}
						key={element.id}
						id={element.id}
					/>
				))}
				<GridItem area='divider' display={{ base: 'none', lg: 'grid' }}>
					<Image
						src='https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/step-by-step-path.svg'
						alt='divider'
					/>
				</GridItem>
			</Grid>
		</HStack>
	);
};

export default InfoSection;
