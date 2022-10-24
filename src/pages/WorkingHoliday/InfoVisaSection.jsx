import { chakra, Divider, Heading, HStack, Stack } from '@chakra-ui/react';
import InfoSection from './components/InfoSection';
import '../../components/custom/CustomBox.css';
import HeadingSection from './components/HeadingSection';
import Benefits from './components/Benefits';

const InfoVisaSection = () => {
	return (
		<Stack minH='100vh' bg='#f8f8f8' gap='10'>
			<chakra.div
				className='box'
				as={Stack}
				aling='center'
				justify='center'
				textAlign='center'
				color='primary.darkGranate'
				w='full'
				bg='primary.lightAqua'
				h={{ base: '50vh', md: '55vh' }}
			>
				<Heading px='10' fontSize='5xl'>
					¿Qué es una VISA Working Holiday?
				</Heading>
			</chakra.div>
			<HStack
				flexWrap='wrap'
				as='section'
				w='full'
				justify='center'
				px={{ base: 4, md: 10 }}
			>
				<HeadingSection />
				<Divider />
				<InfoSection />
			</HStack>
			<Divider />
			<Benefits />
			<Divider />
		</Stack>
	);
};

export default InfoVisaSection;
