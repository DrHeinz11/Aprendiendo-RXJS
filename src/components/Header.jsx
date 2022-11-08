import CustomButtomRoute from './custom/CustomButtonRoute';
import { Stack, Text, Heading } from '@chakra-ui/react';
import CustomBox from '../components/custom/CustomBox';

const Header = ({
	background,
	encabezado,
	parrafo,
	textButton,
	textColor,
	route,
}) => {
	return (
		<Stack as='header' positon='column' justify='center'>
			<CustomBox
				background={background}
				sizes={{ height: { base: '55vh', md: '90vh', lg: '100vh' } }}
			/>
			<Stack
				width={{ base: 'full', md: '50%', lg: '34rem', '2xl': '50rem' }}
				left={{ base: '0', sm: 10 }}
				spacing={5}
				px={{ base: 4, md: 10 }}
				position={{ base: 'inherit', md: 'absolute' }}
				textAlign={{ base: 'center', md: 'start' }}
				alignItems={{ base: 'center', md: 'start' }}
			>
				<Heading
				as='h1'
					lineHeight='1.15'
					fontSize={{ base: '2xl', md: '4xl', '2xl': '5xl' }}
					color={{ base: 'primary.darkGranate', md: textColor }}
				>
					{encabezado}
				</Heading>
				<Text
					fontStyle={'italic'}
					fontSize={{ base: 'lg', md: 'lg', lg: 'xl', '2xl': '2xl' }}
					fontWeight='500'
					color={{ base: '#515151', md: textColor }}
				>
					{parrafo}
				</Text>
				{textButton && (
					<CustomButtomRoute
						route={route}
						alignSelf='center'
						textButton={textButton}
					/>
				)}
			</Stack>
		</Stack>
	);
};

export default Header;
