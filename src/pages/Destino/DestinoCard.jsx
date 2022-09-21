import CustomButton from "../../components/custom/CustomButton";
import { Stack, Heading, Text, Box, Image } from "@chakra-ui/react";
const DestinoCard = ({ element }) => {
  return (
    <Stack
      key={element.id}
      direction="column"
      p={6}
      boxShadow="md"
      maxWidth="915px"
      bg="#fff"
      borderRadius="xl"
    >
      <Heading
        color="primary.darkGranate"
        _hover={{ color: "primary.lightGranate" }}
      >
        {element.title}
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="center"
      >
        <Text>{element.info}</Text>
        <Image
          objectFit={"contain"}
          w="sm"
          height="xs"
          src={element.url}
          alt={element.title}
        />
      </Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
        width="full"
      >
        <CustomButton
          route={`/services/${element.title}`}
          textButton="Leer mas"
          margin="0 auto"
        />
      </Box>
    </Stack>
  );
};

export default DestinoCard;
