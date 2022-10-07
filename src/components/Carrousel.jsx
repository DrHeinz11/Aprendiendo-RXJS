import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';
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
		<Stack direction='row' justify='center' alignItems='center'> 
				<ChevronLeftIcon
					onClick={scrollMethods.scrollLeft}
					cursor='pointer'
					width='3rem'
					height='3rem'
					display={{ base: 'none', md: 'block' }}
				/> 
			<Slider widthTransfrom={widthTransfrom} />
			<ChevronRightIcon
				onClick={scrollMethods.scrollRight}
				cursor='pointer'
				width='3rem'
				height='3rem'
				display={{ base: 'none', md: 'block' }}
				_hover={{ filter: 'drop-shadow' }}
			/> 
		</Stack>
	);
};

export default Carrousel;
