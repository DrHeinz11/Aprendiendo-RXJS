import { Grid, Text, Heading, Stack } from '@chakra-ui/react';
import { CustomButtomRoute } from '../../../components/index';
import { experienceWK } from '../../../constants/';
import ExperienceCard from './ExperienceCard';
const ExperienceSection = () => {
	return (
		<Grid textAlign='center' justifyItems='center'>
			<Heading>¿Cómo armar tu propia experiencia Working Holiday?</Heading>
			<Text mt={4}>Solo 5 pasos</Text>
			<Stack direction='row' flexWrap='wrap' spacing={5} justify='center'>
				{experienceWK.map(element => (
					<ExperienceCard key={element.key} props={element} />
				))}
			</Stack>
			<CustomButtomRoute
				textButton='empezá ahora'
				signalButton={true}
				route='/comienza-aqui/'
			/>
		</Grid>
	);
};

export default ExperienceSection;
