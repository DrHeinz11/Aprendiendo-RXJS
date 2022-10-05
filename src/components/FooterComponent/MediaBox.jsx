import { Heading, Text, Image, Stack, HStack } from '@chakra-ui/react';
import { handleScrollToTop } from '../../utils';
import { Link } from 'react-router-dom';
import { dataMediaIcon } from '../../constants';
const MediaBox = () => {
	return (
		<Stack margin='0 !important' maxW='350px'>
			<Heading fontSize='xl'>¡SEGUIME!</Heading>
			<Text color='primary.darkGranate' fontSize='lg'>
				Seguinos en las redes y enterate de las últimas novedades.
			</Text>
			<HStack justify={'space-between'}>
				{dataMediaIcon.map(element => (
					<Link
						key={element.alt}
						to={element.route}
						onClick={handleScrollToTop}
					>
						<Image boxSize='48px' src={element.mediaIcon} alt={element.alt} />
					</Link>
				))}
			</HStack>
		</Stack>
	);
};

export default MediaBox;
