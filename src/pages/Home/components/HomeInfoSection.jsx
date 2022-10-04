import { Stack, Heading, Text, Box, Image } from '@chakra-ui/react';
import { CustomButtomRoute } from '../../../components/index';
import dataCard from '../../../constants/constantData/dataCard';

const HomeInfoSection = () => {
	return (
		<Box
			bgImage="url('https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/general-trama-thunder.svg')"
			bgPosition='center'
			bgSize='cover'
			backgroundColor={'primary.lightAqua'}
			py={8}
			px={{ base: 2, md: 4 }}
			w='full'
		>
			<Stack
				margin={'0 auto'}
				direction={{ base: 'column', md: 'row' }}
				bg='#fafafa'
				borderRadius={'2xl'}
				align='center'
				w={{ base: 'xs', sm: 'md', md: 'container.lg' }}
				maxWidth='full'
			>
				<Image
					src={dataCard.infoIMG}
					alt={dataCard.infoTitle}
					w={{ base: 'xs', sm: 'md' }}
					h={{ base: '3xs', sm: 'xs', md: 'md' }}
					borderRadius='2xl'
					objectFit='cover'
				/>
				<Stack
					spacing={5}
					p='4'
					w={{ base: 'full', md: '2xl' }}
					align={{ base: 'center', md: 'flex-start' }}
					textAlign={{ base: 'center', md: 'start' }}
				>
					<Box h='1px' w='100px' position='relative'>
						<Image
							position={{ base: 'absolute', md: 'inherit' }}
							top='-65px'
							left={{ base: '-5rem', md: 0 }}
							src='https://www.yomeanimo.com/wp-content/uploads/2021/03/question-marks.svg'
							w={'100px'}
							h='100px'
						/>
					</Box>
					<Heading>{dataCard.infoTitle}</Heading>
					<Text fontSize={{ base: 'lg', md: 'xl' }}>{dataCard.infoCopy}</Text>
					<CustomButtomRoute
						textButton={'Más detalles'}
						route={dataCard.infoUrl}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default HomeInfoSection;
