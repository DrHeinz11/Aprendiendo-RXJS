import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import DescriptionCard from './DescriptionCard';
import { useDataSubscription } from '../../../hook';

const ImageDescription = () => {
	const [dataResponse] = useDataSubscription();
	console.log(dataResponse);
	return (
		<Stack
			flexWrap='wrap'
			direction='row'
			justify='center'
			gap='5'
			width='100%'
			paddingY={10}
			px='2'
		>
			{dataResponse?.map(elm => (
				<Box key={elm.flagUrl}>
					<Box textAlign='center'>
						<Heading>Working Holiday visa en :</Heading>
						<Text
							bgGradient='linear(to-l, #7928CA, #FF0080)'
							bgClip='text'
							fontSize='6xl'
							fontWeight='extrabold'
						>
							{elm.title}
						</Text>
					</Box>
					<DescriptionCard
						flagUrl={elm.flagUrl}
						title={elm.title}
						info={elm.info}
						url={elm.url}
					/>
				</Box>
			))}
		</Stack>
	);
};

export default ImageDescription;
