import { Stack } from '@chakra-ui/react';
import CustomBoxLink from '../FooterComponent/CustomBoxLink';
import MediaBox from './MediaBox';

const Footer = () => {
	return (
		<Stack
		as='footer'
			p='10'
			gap={{ base: 5, md: 10 }}
			justify={{ base: 'flex-start', md: 'center' }}
			direction='row'
			flexWrap='wrap'
			zIndex='100'
		>
			<CustomBoxLink />
			<MediaBox />
		</Stack>
	);
};

export default Footer;
