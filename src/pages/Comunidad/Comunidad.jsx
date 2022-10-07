import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import PruebaCarrousel from '../../components/PruebaCarrousel';

const Comunidad = () => {
	const [widthTransfrom, setWidthTransfrom] = useState(0);
	const widthAll = 500;
	const handleTransform = () => {
		setWidthTransfrom(prev => (prev >= 1500 ? 0 : prev + widthAll));
	};
	return (
		<Stack
			direction='row'
			justify='center'
			alignItems='center'
			bg='#fafafa'
			minH={'100vh'}
		>
			<ArrowLeftIcon
				onClick={handleTransform}
				cursor='pointer'
				width='2rem'
				height='2rem'
			/>
			<PruebaCarrousel widthTransfrom={widthTransfrom} />
			<ArrowRightIcon
				onClick={handleTransform}
				cursor='pointer'
				width='2rem'
				height='2rem'
			/>
		</Stack>
	);
};

export default Comunidad;
