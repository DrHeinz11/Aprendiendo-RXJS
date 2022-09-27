import { Box, Heading, Stack } from "@chakra-ui/react";
import dataCardCountry from "../../constants/constantData/dataCardCountry";
import { CustomBox } from "../../components/index";
import FormDescription from "../../components/Description/FormDescription";
import ImageDescription from "../../components/Description/ImageDescription";
const bg = {
  base: "https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png",
  md: "https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png",
};

const DestinoSection = () => {
  return (
    <Box bg="#E2E8F0">
      <CustomBox
        align="flex-start"
        background={bg}
        sizes={{ height: { base: "120vh", md: "110vh", lg: "100vh" } }}
      >
        <Stack alignItems={"center"}>
          <Heading
            textAlign="center"
            fontSize={{ base: "4xl", md: "5xl" }}
            color="#fff"
            mb={8}
          >
            Viajá y Trabajá por el mundo!
          </Heading>
          <FormDescription />
        </Stack>
      </CustomBox>
      <Stack
        flexWrap="wrap"
        direction="row"
        justify="center"
        gap="5"
        width="100%"
        paddingY={10}
        px="2"
      >
        <ImageDescription dataArray={dataCardCountry} />
      </Stack>
    </Box>
  );
};

export default DestinoSection;
