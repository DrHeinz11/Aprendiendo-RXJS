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
				w='fit-content'
				textTransform='initial'
				fontSize={{ base: 'lg', md: 'xl' }}
				py={6}
				px={10}
			>
				{textoButton}
			</Button>
		</Link>
	);
};

export default CustomButtomRoute;
