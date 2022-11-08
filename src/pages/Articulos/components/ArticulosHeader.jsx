import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import CustomBox from '../../../components/custom/CustomBox';

const ArticulosHeader = () => {
	return (
		<Stack positon='column' justify='center' alignItems='center'>
			<CustomBox
				background={{
					base: 'https://www.yomeanimo.com/wp-content/uploads/2021/05/Grupo-1916@2x.png',
					md: 'https://www.yomeanimo.com/wp-content/uploads/2021/05/Grupo-1916@2x.png',
				}}
				sizes={{ height: { base: '50vh' } }}
			/>
			<Stack
				maxWidth='1000px'
				margin='0 auto'
				spacing={5}
				px={{ base: 4, md: 10 }}
				position='absolute'
				textAlign='center'
				color='#fff'
			>
				<Heading
					lineHeight='1.15'
					px='10'
					fontSize={{ base: '4xl', md: '5xl' }}
				>
					Últimos artículos
				</Heading>
				<Text fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }} fontWeight='500'>
					Encontrá las novedades más recientes
				</Text>
			</Stack>
		</Stack>
	);
};

export default ArticulosHeader;
