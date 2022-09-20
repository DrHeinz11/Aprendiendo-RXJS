import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sharingDescriptions } from "../services/sharing-description.service";
const dataobject = [
  {
    country: "Australia",
    imgUrl: "https://gostudyaus.es/wp-content/uploads/2018/09/SYD_header.jpg",
    imgIcon:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    id: 1,
  },
  {
    country: "NewZealand",
    imgUrl: "https://gostudyaus.es/wp-content/uploads/2018/09/SYD_header.jpg",
    imgIcon: "",
    id: 2,
  },
  {
    country: "Denmark",
    imgUrl: "https://abroadahead.com/wp-content/uploads/2021/12/denmark-1.jpg",
    imgIcon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png",
    id: 3,
  },
  {
    country: "Austria",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/13-08-30-wien-by-RalfR-123.jpg/1024px-13-08-30-wien-by-RalfR-123.jpg",
    imgIcon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png",
    id: 4,
  },
];
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
        dataobject?.map(
          (elm) =>
            elm.country === data.country && (
              <Stack
                bg="#efefef"
                direction="column"
                gap={5}
                key={elm.id}
                p={10}
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
