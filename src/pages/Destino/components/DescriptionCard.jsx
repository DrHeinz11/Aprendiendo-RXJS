import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

const DescriptionCard = ({subInfo, flagUrl, title, url, info }) => {
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
			<Stack gap='2' w={{ base: 'full', md: 'md' }}>
				<Text fontSize='lg' fontWeight='medium'>{info}</Text>
				<Text fontSize='md' >{subInfo}</Text>
			</Stack>
		</Stack>
	);
};

export default DescriptionCard;
