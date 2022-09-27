import CustomButton from "./custom/CustomButton";
import { Stack, Text, Heading } from "@chakra-ui/react";
import CustomBox from "../components/custom/CustomBox";
import { Link } from "react-router-dom";

const Header = ({
  background,
  encabezado,
  parrafo,
  textButton,
  textColor,
  route,
}) => {
  return (
    <Stack positon="column" justify="center">
      <CustomBox
        background={background}
        sizes={{ height: { base: "55vh", md: "90vh", lg: "85vh" } }}
      />
      <Stack
        width={{ base: "full", md: "50%", lg: "34rem" }}
        left={{ base: "0", sm: 10 }}
        spacing={5}
        px={4}
        position={{ base: "inherit", md: "absolute" }}
        textAlign={{ base: "center", md: "start" }}
        alignItems={{ base: "center", md: "start" }}
      >
        <Heading
          lineHeight="1.15"
          fontSize={{ base: "2xl", md: "4xl" }}
          color={{ base: "primary.darkGranate", md: textColor }}
        >
          {encabezado}
        </Heading>
        <Text
          fontStyle={"italic"}
          fontSize={{ base: "lg", md: "lg", lg: "xl" }}
          fontWeight="500"
          color={{ base: "#515151", md: textColor }}
        >
          {parrafo}
        </Text>
        <CustomButton
          route={route}
          alignSelf="center"
          textButton={textButton}
        />
      </Stack>
    </Stack>
  );
};

export default Header;
