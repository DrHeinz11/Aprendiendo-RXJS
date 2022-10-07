import { Heading, Text, Stack, HStack, Link } from '@chakra-ui/react';
import { handleScrollToTop } from '../../utils';
import { dataMediaIcon } from '../../constants';
const MediaBox = () => {
	return (
		<Stack margin='0 !important' maxW='350px'>
			<Heading fontSize='xl'>¡SEGUIME!</Heading>
			<Text color='primary.darkGranate' fontSize='lg'>
				Seguinos en las redes y enterate de las últimas novedades.
			</Text>
			<HStack justify={'flex-start'}>
				{dataMediaIcon.map(element => (
					<Link
						cursor='pointer'
						rel='noreferrer'
						key={element.alt}
						href={element.route}
						target={'_blank'}
						onClick={handleScrollToTop}
					>
						<>{element.mediaIcon({ fill: '#00DBD0', hovered: '#EC3862' })}</>
					</Link>
				))}
			</HStack>
		</Stack>
	);
};

export default MediaBox;
