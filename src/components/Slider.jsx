import { Box, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dataCardCountry } from '../constants';
import CountryCard from './CountryCard';

const Slider = ({ widthTransfrom }) => {
	const carruselReference = useRef();

	return (
		<Box
			ref={carruselReference}
			w={{ base: '20rem', sm: '30rem', md: '40rem', lg: '56rem' }}
			overflowX={{ base: 'scroll', md: 'hidden' }}
		>
			<Stack
				as={motion.div}
				w='max-content'
				direction='row'
				p={4}
				gap={4}
				transition={{ base: 'none', md: 'transform 400ms ease' }}
				transform={{
					base: 'none',
					md: `translate3d(-${widthTransfrom}px,0,0)`,
				}}
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

export default Slider;
