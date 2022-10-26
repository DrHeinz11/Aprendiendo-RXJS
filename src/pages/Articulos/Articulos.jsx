import { Box } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Articulos = () => {
const {id} = useParams();
	return (
		<Box bg='#fafafa' minH={'100vh'}>
			asdas:{id}
		</Box>
	);
};

export default Articulos;
