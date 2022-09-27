import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import dataObject from "../../constants/dataObject";
import React, { useEffect, useState } from "react";
import { sharingDescriptions } from "../../services/sharing-description.service";

const ImageDescription = ({ dataArray }) => {
  const [dataResponse, setDataResponse] = useState("");

  const subscription$ = sharingDescriptions.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => setDataResponse(data));
  }, []);

  const dataFiltered = dataArray.filter(
    (element) => element.title === dataResponse.country
  );
  console.log(dataFiltered);
  return (
    <>
      {dataResponse &&
        dataFiltered?.map((elm) => (
          <Stack
            bg="#efefef"
            direction="row"
            alignItems="center"
            gap={5}
            wrap="wrap"
            key={elm.id}
            p={{ base: 4, md: 10 }}
            borderRadius="md"
            boxShadow="md"
          >
            <Stack direction="column" w={{ base: "full", md: "md" }}>
              <Stack direction="row" spacing={22} align="center">
                <Image
                  objectFit="cover"
                  src={elm.flagUrl}
                  boxSize="48px"
                  borderRadius="full"
                />
                <Heading>{elm.title}</Heading>
              </Stack>
              <Image src={elm.url} />
            </Stack>
            <Box w={{ base: "full", md: "md" }}>
              <Text>{elm.info}</Text>
            </Box>
          </Stack>
        ))}
    </>
  );
};

export default ImageDescription;
