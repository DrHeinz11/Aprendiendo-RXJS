import { Stack, Heading, Text } from "@chakra-ui/react";
const BrandInfo = ({ svgIcon, heading, copy }) => {
  return (
    <Stack spacing={4} direction="column" justify="center" align="center" p={2}>
      <Image src={svgIcon} alt={heading} boxSize="sm" />
      <Heading
        color={"primary.darkGranate"}
        fontSize="3xl"
        fontWeight="extrabold"
      >
        {heading}
      </Heading>
      <Text color={"primary.darkGranate"} fontSize="lg">
        {copy}
      </Text>
    </Stack>
  );
};

export default BrandInfo;
