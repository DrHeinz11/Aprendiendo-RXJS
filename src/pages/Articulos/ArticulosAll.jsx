import { Stack } from '@chakra-ui/react';
import React from 'react';
import ArticulosHeader from './components/ArticulosHeader';

const ArticulosAll = () => {
	return (
		<Stack spacing='0' as='section'>
			<ArticulosHeader />
		</Stack>
	);
};

export default ArticulosAll;
