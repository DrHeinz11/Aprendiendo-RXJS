import { Stack, StackDivider } from '@chakra-ui/react';
import {
	ExperienceSection,
	HomeInfoSection,
	CountrySection,
} from './components';
import { Header } from '../../components';

const Home = () => {
	return (
		<>
			<Header
				background={{
					base: 'https://www.yomeanimo.com/wp-content/uploads/2022/02/header-berna-final-mobile-4.jpg',
					md: 'https://www.yomeanimo.com/wp-content/uploads/2022/02/YoMeAnimo-home.jpg',
				}}
				encabezado='Viví la experiencia de viajar y trabajar por el mundo'
				parrafo='Armá tu propio viaje de Working Holiday, como ya lo hicieron miles de
        Yomeanimers!'
				textButton='Comenzá tu viaje'
				textColor='primary.darkGranate'
				route='/comienza-aqui/'
			/>
			<Stack as='main' px={0} gap={8} marginTop={8}>
				<StackDivider as='divider' h='1px' bg='blackAlpha.200' w='full' />
				<CountrySection />
				<StackDivider as='divider' h='1px' bg='blackAlpha.200' w='full' />
				<ExperienceSection />
				<StackDivider as='divider' h='1px' bg='blackAlpha.200' w='full' />
				<HomeInfoSection />
				{/* <PromotionCard />
						<BlogSection />
						<PrensaSection />
						<SocialMediaSection />
						<FormSection />
						<TermUseSection /> */}
			</Stack>
		</>
	);
};

export default Home;
