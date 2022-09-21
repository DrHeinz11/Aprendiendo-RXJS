import { Container, StackDivider } from "@chakra-ui/react";
import {
  ExperienceSection,
  Header,
  HomeInfoSection,
  CountrySection,
} from "../components/index";
const Home = () => {
  return (
    <>
      <Header
        background={{
          base: "https://www.yomeanimo.com/wp-content/uploads/2022/02/header-berna-final-mobile-4.jpg",
          md: "https://www.yomeanimo.com/wp-content/uploads/2022/02/YoMeAnimo-home.jpg",
        }}
        encabezado="Viví la experiencia de viajar y trabajar por el mundo"
        parrafo="Armá tu propio viaje de Working Holiday, como ya lo hicieron miles de
        Yomeanimers!"
        textButton="Comenzá tu viaje"
        textColor="primary.darkGranate"
        route="/comienza-aqui/"
      />
      <Container px={0} centerContent gap={8} marginTop={8}>
        {" "}
        <StackDivider />
        <CountrySection />
        <StackDivider />
        <ExperienceSection />
        <StackDivider />
        <HomeInfoSection />
        {/*    <PromotionCard />
      <BlogSection />
      <PrensaSection />
      <SocialMediaSection />
      <FormSection />
      <TermUseSection />*/}
      </Container>{" "}
    </>
  );
};

export default Home;
