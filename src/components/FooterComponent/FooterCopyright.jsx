import { Link } from 'react-router-dom';
import { Divider, Image, Stack, Text } from '@chakra-ui/react';

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
					alt={data.imgTitle}
				/>
				<Text>
					Dedicados a ayudarte a conocer el mundo, ya sea trabajando y viajando,
					o simplemente a través de nuestros artículos. Tratamos de motivar y
					animar a nuestros lectores a largarse a la aventura.
				</Text>
			</Stack>
			<Divider />
			<Stack
				spacing={10}
				direction='row'
				wrap={'wrap'}
				justifyContent='center'
				py={5}
			>
				<Link to={'/'}>Terminos de uso</Link>
				<Link to={'/'}>Politica de privacidad</Link>
			</Stack>
			<Divider />
			<Text textAlign='center' p={3} fontSize={'xs'} color='blackAlpha.600'>
				©FrancMartin 2022 - YoMeAnimo! CLONE. Todos los derechos reservados y
				atribuidos a los dueños de esta marca. MVS Argentina SRL.
			</Text>
		</>
	);
};

export default FooterCopyright;
