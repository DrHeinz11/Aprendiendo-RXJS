import React from "react";
import { Stack } from "@chakra-ui/react";
import FormDescription from "./FormDescription";
import ImageDescription from "./ImageDescription";

const DescriptionPage = () => {
  return (
    <Stack
      direction="column"
      spacing={10}
      alignItems="center"
      bg="#d8d8d8"
      w="full"
      minH="110vh"
      py={10}
    >
      <FormDescription />
      <ImageDescription />
    </Stack>
  );
};

export default DescriptionPage;
