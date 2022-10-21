import { Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CardCurso from '../CardCursoDestino/CardCurso';
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
const CursosInCountry = () => {
	const [selected, setSelected] = useState('');

	useEffect(() => {
		console.log(selected);
	}, [selected]);
	return (
		<Stack
			alignItems='center'
			margin='0 auto'
			gap='4'
			textAlign={{ base: 'center', md: 'start' }}
			w={{ base: 'full', lg: 'container.lg' }}
		>
			<Heading color='primary.darkGranate'>
				Estudia y trabaja en el exterior
			</Heading>
			<Text px={{ base: '4', md: '10' }} mt='4' fontSize='xl'>
				¿Estás interesado en ir a estudiar afuera, ya sea a perfeccionar el
				idioma o hacer algún diplomado?. Las visas de estudiantes tienen la
				ventaja de que se pueden obtener en cualquier momento del año, no tienen
				límite de edad, o los habilitan a trabajar legalmente en el país!
			</Text>

			<Stack alignItems='center' w='full'>
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
							value={element.text}
							key={element.id}
							id={element.id}
							setSelected={setSelected}
						/>
					))}
				</Grid>
			</Stack>

			{selected?.map(element => (
				<CardCurso props={element} key={element.id} />
			))}
		</Stack>
	);
};

export default CursosInCountry;
