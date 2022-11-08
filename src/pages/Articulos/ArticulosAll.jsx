import { Grid, Stack } from '@chakra-ui/react';
import React from 'react';
import { dataComunity } from '../../constants/dataCommunity/dataComunity';
import CardSlider from '../Comunidad/components/CardSlider';
import ArticulosHeader from './components/ArticulosHeader';

const ArticulosAll = () => {
	return (
		<Stack spacing='0' as='section'>
			<ArticulosHeader />
			<Grid
				p='10'
				gap='4'
				placeItems='center'
				gridTemplateColumns='repeat(auto-fit,minmax(275px,1fr))'
			>
				{dataComunity?.map(element =>
					element?.blog?.map(element => (
						<CardSlider
							key={element.id}
							id={element.number}
							imgUrl={element.imgUrl}
							imgAlt={element.imgAlt}
							headTitle={element.headTitle}
							title={element.title}
						/>
					))
				)}
			</Grid>
		</Stack>
	);
};

export default ArticulosAll;
