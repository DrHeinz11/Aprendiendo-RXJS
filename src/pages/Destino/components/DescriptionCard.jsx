import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

const DescriptionCard = ({ flagUrl, title, url, info }) => {
	return (
		<Stack
			bg='#efefef'
			direction='row'
			alignItems='center'
			gap={5}
			wrap='wrap'
			p={{ base: 4, md: 10 }}
			borderRadius='md'
			boxShadow='md'
		>
			<Stack direction='column' w={{ base: 'full', md: 'md' }}>
				<Stack direction='row' spacing={22} align='center'>
					<Image
						objectFit='cover'
						src={flagUrl}
						boxSize='48px'
						borderRadius='full'
					/>
					<Heading>{title}</Heading>
				</Stack>
				<Image src={url} />
			</Stack>
			<Box w={{ base: 'full', md: 'md' }}>
				<Text>{info}</Text>
			</Box>
		</Stack>
	);
};

export default DescriptionCard;
