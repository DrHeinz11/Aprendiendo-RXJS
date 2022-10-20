import { HStack, Image } from '@chakra-ui/react';
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
const InfoSection = () => {
	return (
		<HStack
			flexWrap='wrap'
			as='section'
			w='full'
			columnGap={{ base: '2', lg: '24rem' }}
			justify='center'
            position={'relative'}
		>
			{dataInfoBox.map(element => (
				<InfoBox
					imgAlt={element.imgAlt}
					imgUrl={element.imgUrl}
					heading={element.heading}
					paragraph={element.paragraph}
					key={element.id}
				/>
			))}
			<Image
				src='https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/step-by-step-path.svg'
				alt='divider'
				display={{ base: 'none', md: 'block' }}
                position='absolute'
			/>
		</HStack>
	);
};

export default InfoSection;
