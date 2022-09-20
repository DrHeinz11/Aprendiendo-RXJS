import React from "react";
import { Stack } from "@chakra-ui/react";
import FormDescription from "./FormDescription";
import ImageDescription from "./ImageDescription";

const DescriptionPage = () => {
  return (
    <Stack
      direction="column"
      spacing={10}
      alignContent="center"
      bg="#fafafa"
      width="xl"
      minHeight="xl"
      justifyContent="center"
    >
      <FormDescription />
      <ImageDescription />
    </Stack>
  );
};

export default DescriptionPage;
