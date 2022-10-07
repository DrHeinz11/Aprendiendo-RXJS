import { dataCardCountry } from '../../../constants';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../../utils';
import { Stack, Box, Heading } from '@chakra-ui/react';
import { CustomButtomRoute } from '../../../components/index';
import CountryCard from '../../../components/CountryCard';
// import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CountrySection = () => {
	const referencia = useRef();
	// const [initial, setInitial] = useState(0);
	// const [next, setNext] = useState(3);
	// const arrSliced = dataCardCountry.slice(initial, next);
	// const handleNextClick = () => {
	// 	if (next === dataCardCountry.length) {
	// 		setInitial(0);
	// 		setNext(3);
	// 		return;
	// 	}
	// 	setInitial(prev => prev + 3);
	// 	setNext(prev => prev + 3);
	// };

	// const handlePrevClick = () => {};
	// console.log(initial, next);
	useEffect(() => {
		console.log(referencia.current.scrollWidth, referencia.current.offsetWidth);
	}, []);
	return (
		<Stack
			direction='column'
			spacing={4}
			align='center'
			maxWidth={'100%'}
			px={2}
		>
			<Heading
				textAlign='center'
				weight='black'
				fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
				lineHeight='1.15'
				color={'primary.darkGranate'}
			>
				Conocé todos los destinos Working Holiday
			</Heading>

			<Box
				as={motion.div}
				ref={referencia}
				p={4}
				gap={4}
				display='flex'
				overflowX='scroll'
				maxWidth={{ base: '350px', sm: 'full', lg: '75%' }}
				alignItems='center'
				position='relative'
				whileTap={{ cursor: 'grabbing' }}
			>
				{dataCardCountry.map(element => (
					<Link
						to={`/country/${element.title}/`}
						onClick={handleScrollToTop}
						key={element.id}
					>
						<CountryCard
							as={motion.div}
							title={element.title}
							url={element.url}
							id={element.id}
							flagUrl={element.flagUrl}
						/>
					</Link>
				))}
			</Box>

			<CustomButtomRoute route='/destinos/' textButton='Ver más destinos' />
		</Stack>
	);
};

export default CountrySection;
