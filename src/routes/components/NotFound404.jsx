import { Button, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PaperAirplane } from '../../assets';

const NotFound404 = () => {
	return (
		<Grid width='full' height='100vh' placeItems='center'>
			<HStack flexWrap='wrap' w='full' justifyContent='center' p='10' gap='10'>
				<PaperAirplane />
				<Stack gap='4' spacing='0' textAlign='center'>
					<Heading color='primary.pinkChicle'>ERROR 404</Heading>
					<Heading>Not found</Heading>
					<Link to='/'>
						<Button
							size={'md'}
							px='10'
							bg='primary.pinkChicle'
							_hover={{ bg: '#FD6A8C', color: '#000' }}
							color={'white'}
						>
							Back on the road
						</Button>
					</Link>
				</Stack>
			</HStack>
		</Grid>
	);
};

export default NotFound404;
