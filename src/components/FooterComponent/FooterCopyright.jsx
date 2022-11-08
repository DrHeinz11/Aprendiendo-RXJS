import { Link } from 'react-router-dom';
import { Divider, HStack, Image, Stack, Text } from '@chakra-ui/react';

const data = {
	imgUrl:
		'https://www.yomeanimo.com/wp-content/uploads/2021/03/yomeanimoyvos-brand.svg',
	imgAlt: 'Yo me animo /LOGO',
	imgKey: 2,
};

const FooterCopyright = () => {
	return (
		<>
			{' '}
			<Divider />
			<Stack
				bg='#ededed'
				direction={{ base: 'column', md: 'row' }}
				spacing={10}
				p={15}
				borderRadius='2xl'
				mx={{ base: 4, md: 14 }}
				my={5}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				<Image
					_hover={{ opacity: 0.7, trasition: 'opacity 300ms' }}
					maxW='220px'
					src={data.imgUrl}
					alt={'YoMeAnimoLogo'}
				/>
				<Text>
					Dedicados a ayudarte a conocer el mundo, ya sea trabajando y viajando,
					o simplemente a través de nuestros artículos. Tratamos de motivar y
					animar a nuestros lectores a largarse a la aventura.
				</Text>
			</Stack>
			<Divider />
			<footer>
				<HStack as='nav' spacing={10} wrap={'wrap'} justifyContent='center' py={5}>
					<Link to={'/'}>Terminos de uso</Link>
					<Link to={'/'}>Politica de privacidad</Link>
				</HStack>
				<Divider />
				<Text textAlign='center' p={3} fontSize={'xs'} color='blackAlpha.600'>
					©FrancMartin 2022 - YoMeAnimo! CLONE. Todos los derechos reservados y
					atribuidos a los dueños de esta marca. MVS Argentina SRL.
				</Text>
			</footer>
		</>
	);
};

export default FooterCopyright;
