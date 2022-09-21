import { Stack, Heading, Text, Box, Image } from "@chakra-ui/react";
import { CustomButton } from "./index";
import dataCard from "../constants/constantData/dataCard";

const HomeInfoSection = () => {
  return (
    <Box
      bgImage="url('https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/general-trama-thunder.svg')"
      bgPosition="center"
      bgSize="cover"
      backgroundColor={"primary.lightAqua"}
      py={8}
      px={4}
      w="full"
    >
      <Stack
        margin={"0 auto"}
        direction={{ base: "column", md: "row" }}
        bg="#fafafa"
        borderRadius={"2xl"}
        align="center"
        gap={5}
        w={{ base: "xs", sm: "md", md: "full" }}
      >
        <Image
          src={dataCard.infoIMG}
          alt={dataCard.infoTitle}
          boxSize={{ base: "xs", sm: "md" }}
          borderRadius="2xl"
          objectFit="cover"
        />
        <Stack spacing={5} p="4" align={{ base: "center", md: "flex-start" }}>
          <Heading>{dataCard.infoTitle}</Heading>
          <Text>{dataCard.infoCopy}</Text>
          <CustomButton textButton={"Más detalles"} route={dataCard.infoUrl} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeInfoSection;
