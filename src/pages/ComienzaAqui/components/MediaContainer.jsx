import { Box, Heading, Stack, chakra } from "@chakra-ui/react";
import React from "react";

const MediaContainer = () => {
  return (
    <Stack direction="column" align="center" textAlign="center" spacing={10}>
      <Heading
        color="primary.darkGranate"
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        ¿Todavía tienen dudas? Se los explico en video?
      </Heading>
      <Box>
        <chakra.iframe
          width={{ base: "360px", md: "550px", lg: "780px" }}
          height={{ base: "315px", md: "400px", lg: "400px" }}
          src="https://www.youtube.com/embed/vorY9e0yoIQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></chakra.iframe>
      </Box>
    </Stack>
  );
};

export default MediaContainer;
