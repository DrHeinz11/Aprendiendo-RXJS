import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const WorkingHoliday = () => {
	const { id } = useParams();
	return <Heading>prueba: {id}</Heading>;
};

export default WorkingHoliday;
