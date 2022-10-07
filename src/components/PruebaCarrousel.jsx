import { Box, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataCardCountry } from '../constants';
import CountryCard from './CountryCard';

const PruebaCarrousel = ({ widthTransfrom }) => {
	const carruselReference = useRef();
	const [width, setWidth] = useState();
	useEffect(() => {
		setWidth(
			carruselReference.current.scrollWidth -
				carruselReference.current.offsetWidth
		);
	}, []);

	return (
		<Box
			ref={carruselReference}
			w={{ base: '22rem', md: '56rem' }}
			overflowX='hidden'
		>
			<Stack
				as={motion.div}
				drag='x'
				w='max-content'
				dragConstraints={{ right: 0, left: -width }}
				direction='row'
				p={4}
				gap={4}
				transform={`translate3d(-${widthTransfrom}px,0,0)`}
			>
				{dataCardCountry.map(element => (
					<Link to={`/country/${element.title}/`} key={element.id}>
						<CountryCard
							title={element.title}
							url={element.url}
							id={element.id}
							flagUrl={element.flagUrl}
						/>
					</Link>
				))}
			</Stack>
		</Box>
	);
};

export default PruebaCarrousel;
