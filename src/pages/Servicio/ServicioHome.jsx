import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { CustomBox } from '../../components';
import { BackgroundCustomBox } from '../../constants';
import { CardSelected, Content } from './components';
import { ServiceProvider } from './context/context';

const ServicioHome = () => {
	const { id } = useParams();
	return (
		<>
			<CustomBox
				background={BackgroundCustomBox}
				align={'center'}
				sizes={{ height: '45vh' }}
			>
				<Box textAlign='center' mb={4}>
					<Heading
						fontSize={{ base: '4xl', md: '5xl' }}
						textTransform='capitalize'
						color='#fff'
					>
						Servicios
					</Heading>
					<Text mt='2' color='#fafafa' fontSize={{ base: 'md', md: 'xl' }}>
						Todo lo que necesitas para emprender tu viaje por el mundo.
					</Text>
				</Box>
			</CustomBox>
			<ServiceProvider>
				<Stack gap='4' mb='10' align='center'>
					<CardSelected />
					<Content />
				</Stack>
			</ServiceProvider>
		</>
	);
};

export default ServicioHome;
