import { Stack, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dataCardCountry } from "../../../constants";
import { CountryCard, CustomButtomRoute } from "../../../components";

const ExperienceSlider = () => {
  return (
    <Stack
      direction="column"
      align="center"
      fontWeight="900"
      spacing={10}
      mt={20}
      px={{ base: 5, md: 10, lg: 15 }}
      textAlign="center"
    >
      <Heading color="primary.darkGranate" fontSize="4xl">
        Experiencias de viaje de algunos Yomeanimers
      </Heading>
      <Box p={4} gap={4} width="100%" overflowX={"scroll"} display="flex">
        {dataCardCountry.map((element) => (
          <Link to={`/blog/${element.title}`} key={element.id}>
            <CountryCard
              title={element.title}
              url={element.url}
              id={element.id}
              flagUrl={element.flagUrl}
            />
          </Link>
        ))}
      </Box>
      <CustomButtomRoute
        textButton="ver más artículos"
        sizeButton="lg"
        route="/comunidad/"
      />
    </Stack>
  );
};

export default ExperienceSlider;
