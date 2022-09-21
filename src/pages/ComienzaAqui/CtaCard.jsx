import { Grid, Heading, Box } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../components/custom/CustomButton";

const CtaCard = ({
  heading,
  subHeading,
  textButton,
  sizeButton,
  background,
}) => {
  return (
    <Box
      backgroundImage={{
        base: `url(${background.base})`,
        sm: `url(${background.md})`,
      }}
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      margin="0 auto"
      h="75vh"
      display="grid"
      placeContent="center"
    >
      <Grid
        borderRadius="2xl"
        placeContent={"center"}
        justifyItems="center"
        gap={{ base: 2, md: 3 }}
        margin="0 auto"
        width={{
          base: "20rem",
          sm: "25rem",
          md: "35rem",
          lg: "55rem",
          xl: "65rem",
        }}
        height={{ base: "50vh", lg: "40vh" }}
        bg="rgba(0,0,0,.15)"
        textAlign="center"
      >
        <Heading color="#000">{heading}</Heading>
        <Heading color="#000">{subHeading}</Heading>
        <CustomButton
          textButton={textButton}
          sizeButton={sizeButton}
          signalButton={true}
          route="/comunidad/"
        />
      </Grid>
    </Box>
  );
};

export default CtaCard;
