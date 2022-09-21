import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import dataObject from "../../constants/dataObject";
import React, { useEffect, useState } from "react";
import { sharingDescriptions } from "../../services/sharing-description.service";

const ImageDescription = () => {
  const [data, setData] = useState(null);
  const subscription$ = sharingDescriptions.getSubject();
  useEffect(() => {
    subscription$.subscribe((data) => setData(data));
  }, []);

  return (
    <>
      <div>ImageDescription</div>
      {data &&
        dataObject?.map(
          (elm) =>
            elm.country === data.country && (
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
                    src={elm.imgIcon}
                    boxSize="68px"
                    borderRadius="full"
                  />
                  <Heading>{elm.country}</Heading>
                </Stack>
                <Image src={elm.imgUrl} />
              </Stack>
            )
        )}
    </>
  );
};

export default ImageDescription;
