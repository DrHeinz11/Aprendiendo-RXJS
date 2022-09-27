import { Grid, Text, Heading, Stack } from "@chakra-ui/react";
import { CustomButtomRoute } from "../index";
import ExperienceCard from "../../components/ExperienceSection/ExperienceCard";
import { experienceWK } from "../../constants/constantData/experienceWK";
const ExperienceSection = () => {
  return (
    <Grid textAlign="center" justifyItems="center">
      <Heading>¿Cómo armar tu propia experiencia Working Holiday?</Heading>
      <Text mt={4}>Solo 5 pasos</Text>
      <Stack direction="row" flexWrap="wrap" spacing={5} justify="center">
        {experienceWK.map((element) => (
          <ExperienceCard key={element.key} props={element} />
        ))}
      </Stack>
      <CustomButtomRoute
        textButton="empezá ahora"
        signalButton={true}
        route="/comienza-aqui/"
      />
    </Grid>
  );
};

export default ExperienceSection;
