import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sharingDescriptions } from "../../../services";
import { handleScrollDown } from "../../../utils";

const ImageDescription = ({ dataArray }) => {
  const [dataResponse, setDataResponse] = useState([]);

  const subscription$ = sharingDescriptions.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      const setData = dataArray.filter(
        (element) => element.title === data.country
      );
      setData.length &&
        setTimeout(() => {
          handleScrollDown(640);
        }, 300);
      return setDataResponse(setData);
    });
  }, []);

  return (
    <>
      {dataResponse?.map((elm, ind) => (
        <div key={ind}>
          <Box textAlign="center" key={ind}>
            <Heading>Working Holiday visa en :</Heading>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              {elm.title}
            </Text>
          </Box>
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
        </div>
      ))}
    </>
  );
};

export default ImageDescription;
