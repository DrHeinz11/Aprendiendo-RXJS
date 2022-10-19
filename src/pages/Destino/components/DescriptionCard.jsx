import {
	Collapse,
	Button,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const DescriptionCard = ({ subInfo, flagUrl, title, url, info }) => {
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
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
				<Image maxW='448px' src={url} />
			</Stack>
			<Stack gap='2' w={{ base: 'full', md: 'md' }}>
				<Collapse startingHeight={105} in={show}>
					<Text fontSize='lg' fontWeight='medium'>
						{info}
					</Text>
					<Text fontSize='md'>{subInfo}</Text>
				</Collapse>
				<Button
					onClick={handleToggle}
					variant='link'
					color='primary.darkGranate'
				>
					{!show ? 'Leer más.' : 'Collapse'}
				</Button>
			</Stack>
		</Stack>
	);
};

export default DescriptionCard;
