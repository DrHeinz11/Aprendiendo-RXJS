import { HStack } from '@chakra-ui/react';
import { GraduationIcon, PlusMedicalIcon } from '../../../../assets';
import CardService from './CardService';

const CardSelected = () => {
	return (
		<HStack
			as='article'
			justify='center'
			flexWrap='wrap-reverse'
			gap='2'
			w='full'
			margin='0 auto'
			position='relative'
			top='4rem'
		>
			{[
				{
					service: 'Seguros de viaje',
					id: 1,
					route: '/seguros',
				},
				{
					service: 'Cursos',
					id: 2,
					route: '/cursos',
				},
			].map(element => (
				<CardService key={element.id} service={element.service}>
					{element.service === 'Cursos' ? (
						<GraduationIcon fill={'current'} />
					) : (
						<PlusMedicalIcon fill={'current'} />
					)}
				</CardService>
			))}
		</HStack>
	);
};

export default CardSelected;
