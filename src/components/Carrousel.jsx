import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Slider } from '.';

const Carrousel = () => {
	const [widthTransfrom, setWidthTransfrom] = useState(0);

	const scrollMethods = {
		scrollRight() {
			setWidthTransfrom(prev => (prev >= 1500 ? 0 : prev + 500));
		},
		scrollLeft() {
			setWidthTransfrom(prev => (prev <= 0 ? 1500 : prev - 500));
		},
	};

	return (
		<Stack direction='row' justify='center' alignItems='center' >
			<ArrowLeftIcon
				onClick={scrollMethods.scrollLeft}
				cursor='pointer'
				width='2rem'
				height='2rem'
				display={{ base: 'none', md: 'block' }}
			/>
			<Slider widthTransfrom={widthTransfrom} />
			<ArrowRightIcon
				onClick={scrollMethods.scrollRight}
				cursor='pointer'
				width='2rem'
				height='2rem'
				display={{ base: 'none', md: 'block' }}
			/>
		</Stack>
	);
};

export default Carrousel;
