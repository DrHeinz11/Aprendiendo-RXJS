import { Box, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { CustomBox } from '../../components';
import { BackgroundCustomBox } from '../../constants';

const Servicio = () => {
	const transformParams = () => {
		const { id } = useParams();
		const restult = id.split('-').join(' ');
		return restult;
	};
	return (
		<CustomBox
			background={BackgroundCustomBox}
			align={'center'}
			sizes={{ height: '50vh' }}
		>
			<Box textAlign='center' mb={4}>
				<Heading
					fontSize={{ base: '4xl', md: '5xl' }}
					textTransform='capitalize'
					color='#fff'
				>
					{transformParams()}
				</Heading>
				<Text mt='2' color='#fafafa' fontSize={{ base: 'md', md: 'xl' }}>
					Selecioná tu nacionalidad para consultar la disponibilidad.
				</Text>
			</Box>
		</CustomBox>
	);
};

export default Servicio;
