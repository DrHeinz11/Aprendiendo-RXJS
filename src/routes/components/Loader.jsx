import { Grid, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
	return (
		<Grid width='full' height='100vh' placeContent='center'>
			<Spinner
				thickness='6px'
				speed='0.65s'
				emptyColor='#C5FFF8'
				color='primary.pinkChicle'
				size='xl'
			/>
		</Grid>
	);
};

export default Loader;
