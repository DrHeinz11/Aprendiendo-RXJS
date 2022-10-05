import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { GraduationIcon, PlusMedicalIcon } from '../../assets';
import { CardService } from './components';

const ServicioHome = () => {
	return (
		<Box minH='100vh'>
			<CardService service={'Cursos'}>
				<GraduationIcon fill={'current'} />
			</CardService>

			<CardService service={'Seguros de viaje'}>
				<PlusMedicalIcon fill={'current'} />
			</CardService>
		</Box>
	);
};

export default ServicioHome;
