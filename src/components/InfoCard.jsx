import { Stack, Image, Heading, Text, Box } from '@chakra-ui/react';
import CustomButtomRoute from './custom/CustomButtonRoute';
const InfoCard = ({ data: { infoIMG, infoUrl, infoTitle, infoCopy } }) => {
	return (
		<Box
			bgImage="url('https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/general-trama-thunder.svg')"
			bgPosition='center'
			bgSize='cover'
			backgroundColor={'primary.lightAqua'}
			py={8}
		>
			<Stack
				margin='0 25px !important'
				bg='#fff'
				borderRadius={'2xl'}
				boxShadow='md'
				direction={{ base: 'column', md: 'row' }}
			>
				<Image
					src={infoIMG}
					alt={infoTitle}
					boxSize={{ base: 'auto', md: 'md' }}
					borderBottomRadius={{ base: 'none', md: '2xl' }}
					borderTopRadius={'2xl'}
					objectFit='cover'
				/>
				<Box
					px={6}
					paddingTop={2}
					paddingBottom={6}
					as={Stack}
					direction={'column'}
					justifyContent={{ base: 'auto', md: 'center' }}
					gap={2}
				>
					<Box h={{ base: '1px', md: 'auto' }} margin='0 !important'>
						<Image
							src={
								'https://www.yomeanimo.com/wp-content/uploads/2021/03/question-marks.svg'
							}
							boxSize={'100px'}
							position={{ base: 'relative', md: 'inherit' }}
							bottom={'72px'}
							left={'30px'}
							alt={infoTitle}
						/>
					</Box>
					<Heading
						color='primary.darkGranate'
						textTransform='capitalize'
						fontWeight='900'
						fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
					>
						{infoTitle}
					</Heading>
					<Text
						fontWeight={500}
						fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
						color='primary.darkGranate'
					>
						{infoCopy}
					</Text>
					<CustomButtomRoute
						route='/working-holiday/:id'
						textButton={'Leer más'}
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default InfoCard;
