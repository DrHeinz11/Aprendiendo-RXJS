import { CustomButtomRoute, CountryCard } from "./index";
import { Link } from "react-router-dom";
import { Stack, Box, Heading } from "@chakra-ui/react";
import { dataCardCountry } from "../constants/constantData";

const CountrySlider = () => {
  const arrSliced = dataCardCountry.slice(0, 8);
  return (
    <Stack
      direction="column"
      spacing={4}
      align="center"
      maxWidth={"100%"}
      px={2}
    >
      <Heading
        textAlign="center"
        weight="black"
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        lineHeight="1.15"
        color={"primary.darkGranate"}
      >
        Conocé todos los destinos Working Holiday
      </Heading>
      <Box p={4} gap={4} width="100%" overflowX={"scroll"} display="flex">
        {arrSliced.map((element) => (
          <Link to={`/country/${element.title}/`} key={element.id}>
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
        route="/working-holiday/visa"
        textButton="Ver más destinos"
      />
    </Stack>
  );
};

export default CountrySlider;
