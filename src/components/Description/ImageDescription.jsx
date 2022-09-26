import { Heading, Image, Stack, Text } from "@chakra-ui/react";
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
      <div>ImageDescription</div>
      {dataResponse &&
        dataFiltered?.map((elm) => (
          <Stack
            bg="#efefef"
            direction="column"
            gap={5}
            key={elm.id}
            p={10}
            maxW="3xl"
          >
            <Stack direction="row" spacing={22} align="center">
              <Image
                objectFit="cover"
                src={elm.flagUrl}
                boxSize="68px"
                borderRadius="full"
              />
              <Heading>{elm.title}</Heading>
            </Stack>
            <Image src={elm.url} />
            <Text>{elm.info}</Text>
          </Stack>
        ))}
    </>
  );
};

export default ImageDescription;
