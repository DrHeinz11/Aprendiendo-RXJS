import { Box, Divider, HStack, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { dataCardCountry } from '../../constants';
import CountryHeader from './Components/CountryHeader';
import headerDiseño from '../../assets/headerDiseño.png';
import CountryHeading from './Components/CountryHeading';

const CountrySelected = () => {
	const { id } = useParams();
	const DataFiltered = dataCardCountry.filter(element => element.title === id);
	console.log(DataFiltered);
	return (
		<Box bg='#fafafa' minH='100vh' w='full'>
			<CountryHeader
				title={id}
				background={headerDiseño}
				flagImg={{
					imgUrl: DataFiltered[0].flagUrl,
					imgAlt: DataFiltered[0].title,
				}}
			/>
			<Divider my='6'/>
			<HStack gap={4} spacing='0' p='4' flexWrap='wrap' justify='center'>
				{DataFiltered?.map(element => (
					<>
						<Image
						w='full'
							maxW='550px'
							objectFit='cover'
							src={element.url}
							alt={element.title}
						/>
						<CountryHeading info={element.info} subInfo={element.subInfo} />
					</>
				))}
			</HStack>
		</Box>
	);
};

export default CountrySelected;
