import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import DescriptionCard from './DescriptionCard';
import { useDestinoContext } from '../context/context';
import { useEffect, useState } from 'react';
import dataCardCountry from '../../../constants/constantData/dataCardCountry';
import handleScrollDown from '../../../utils/handleScrollDown';

const ImageDescription = () => {
	const [data, setData] = useState([]);
	const { destino } = useDestinoContext();

	const handleFilter = () => {
		if (!destino.id) return;
		const filter = dataCardCountry.filter(elem => elem.id === destino.id);
		filter.length > 0 ? setData(filter) : setData(null);
		filter.length > 0 ? handleScrollDown(500) : handleScrollDown(250);
	};

	useEffect(() => {
		handleFilter();
	}, [destino]);

	return (
		<Stack
			flexWrap='wrap'
			direction='row'
			justify='center'
			gap='5'
			width='100%'
			paddingY={10}
			px='2'
		>
			{data === null && (
				<Heading
					bgGradient='linear(to-l, #7928CA, #FF0080)'
					bgClip='text'
					fontSize='6xl'
					fontWeight='extrabold'
					textAlign='center'
					my='10'
				>
					No hay ofertas para este pais en este momento ...
				</Heading>
			)}

			{data?.map(elm => (
				<Box key={elm.flagUrl} w='full'>
					<Box textAlign='center' my='4' w='full'>
						<Heading fontSize={{ base: 'xl', md: '4xl' }}>
							Working Holiday visa en :
						</Heading>
						<Text
							bgGradient='linear(to-l, #7928CA, #FF0080)'
							bgClip='text'
							fontSize={{ base: '4xl', md: '6xl' }}
							fontWeight='extrabold'
						>
							{elm.title}
						</Text>
					</Box>
					<DescriptionCard
						flagUrl={elm.flagUrl}
						title={elm.title}
						info={elm.info}
						subInfo={elm.subInfo}
						url={elm.url}
					/>
				</Box>
			))}
		</Stack>
	);
};

export default ImageDescription;
