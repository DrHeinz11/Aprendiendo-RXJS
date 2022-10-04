import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import dataCardCountry from '../../constants/constantData/dataCardCountry';
import { CustomBox } from '../../components/index';
import { FormDescription, ImageDescription } from './components';

const bg = {
	base: 'https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png',
	md: 'https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png',
};

const DestinoSection = () => {
	return (
		<Box bg='#E2E8F0'>
			<CustomBox
				align={'flex-start'}
				background={bg}
				sizes={{ height: { base: '155vh', md: '125vh', lg: '90vh' } }}
			>
				<Stack alignItems={'center'}>
					<Box textAlign='center' mb={4}>
						<Heading fontSize={{ base: '4xl', md: '5xl' }} color='#fff'>
							Viajá y Trabajá por el mundo!
						</Heading>
						<Text mt='2' color='#fafafa' fontSize={{ base: 'md', md: 'xl' }}>
							Selecioná tu nacionalidad y edad para consultar la disponibilidad
							de oportunidades para ti.
						</Text>
					</Box>
					<FormDescription />
				</Stack>
			</CustomBox>
			<Stack
				flexWrap='wrap'
				direction='row'
				justify='center'
				gap='5'
				width='100%'
				paddingY={10}
				px='2'
			>
				<ImageDescription dataArray={dataCardCountry} />
			</Stack>
		</Box>
	);
};

export default DestinoSection;
