import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomButtonOnly = ({ children }) => {
	return (
		<Button
			colorScheme={'red'}
			bg='#EA2250'
			size='lg'
			borderRadius='xl'
			px='16'
			py={8}
			w='fit-content'
			textTransform='initial'
			fontSize={{ base: 'lg', md: 'xl' }}
		>
			{children}
		</Button>
	);
};

export default CustomButtonOnly;
