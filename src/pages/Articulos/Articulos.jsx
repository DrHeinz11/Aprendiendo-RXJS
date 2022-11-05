import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataBlog } from '../../constants/dataCommunity/dataBlog';
import { dataComunity } from '../../constants/dataCommunity/dataComunity';

const Articulos = () => {
	const [dataFilled, setDataFilled] = useState([]);
	const { id } = useParams();
	const dataFilter = dataBlog.filter(element => element.id === id);
	console.log(dataFilter);
	return (
		<Box bg='#fafafa' minH={'100vh'}>
			{dataFilter.map(element => (
				<HStack
					key={element.id}
					flexWrap='wrap'
					spacing='none'
					align='flex-start'
					justify='center'
					p={{ base: '1rem', md: '4rem' }}
					gap='4'
					maxWidth='1200px'
				>
					<Image
						objectFit='cover'
						src={element.imgHeading}
						alt={element.id}
						maxWidth='30rem'
						w='full'
					/>
					<Box flex='1'>
						<Heading color='primary.darkGranate' mb='4'>
							{element.title}
						</Heading>
						{element.description.map((element, index) => (
							<Text mb='1' key={index + element}>{element}</Text>
						))}
					</Box>
					<Box>
						<Heading mb='4' color='primary.darkGranate'>
							{element.titleArticle}
						</Heading>
						{element.paragraphArticle.map((element, index) => (
							<Text mb='1' key={index + element}>{element}</Text>
						))}
					</Box>
				</HStack>
			))}
		</Box>
	);
};

export default Articulos;
