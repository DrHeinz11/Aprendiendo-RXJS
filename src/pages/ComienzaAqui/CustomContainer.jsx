import { Heading, Stack, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../components/custom/CustomButton";

const CustomContainer = ({
  illustrationUrl,
  illustrationName,
  heading,
  paragraph,
  textButton,
  direction,
  id,
  signal,
}) => {
  const directions = direction % 2 === 0 ? "row" : "row-reverse";
  return (
    <Stack
      direction={{ base: "column", md: directions }}
      spacing={20}
      w={{ base: "container.xs", lg: "container.lg" }}
      justify="center"
      py={5}
      px={2}
      align="center"
    >
      <Image src={illustrationUrl} alt={illustrationName} px={12} />
      <Stack spacing={5} alignItems={{ base: "center", md: "auto" }}>
        <Heading
          display="flex"
          gap={2}
          alignItems="stretch"
          color="primary.darkGranate"
          fontSize="3xl"
          fontWeight="bold"
          key={`${id}${heading}`}
        >
          <chakra.span
            color="primary.darkAqua"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
          >{`${id}.`}</chakra.span>
          {heading}
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }}>{paragraph}</Text>
        {textButton && (
          <CustomButton
            textButton={textButton}
            signalButton={signal}
            sizeButton={{ base: "md", md: "lg" }}
            route="/working-holiday/:id"
          />
        )}
      </Stack>
    </Stack>
  );
};

export default CustomContainer;
