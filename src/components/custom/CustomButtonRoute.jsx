import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { handleScrollToTop, useTransform } from '../../utils';
const CustomButtomRoute = ({ textButton, signalButton, sizeButton, route }) => {
	const textoButton = useTransform(textButton, signalButton);
	return (
		<Link to={route} onClick={handleScrollToTop}>
			<Button
				colorScheme={'red'}
				bg='#EA2250'
				size={sizeButton}
				borderRadius='xl'
				w={{ base: '300px', sm: 'fit-content' }}
				textTransform='initial'
				fontSize={{ base: 'md', md: 'xl', '2xl': '2xl' }}
				py={{ base: '6', '2xl': '2rem' }}
				px={{ base: '6', '2xl': '4rem' }}
			>
				{textoButton}
			</Button>
		</Link>
	);
};

export default CustomButtomRoute;
