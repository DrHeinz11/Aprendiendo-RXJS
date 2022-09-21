import { Stack, Image, Box } from "@chakra-ui/react";
const PromotionCard = () => {
  return (
    <Stack direction="row" borderRadius="2xl">
      <Image
        borderStartRadius={"2xl"}
        src={PromotionImg}
        alt={PromotionTitle}
      />
      <SvgDivider />
      <Box>
        <Heading>{PromotionTitle}</Heading>
        <Text>{PromotionCopy}</Text>
      </Box>
    </Stack>
  );
};

export default PromotionCard;
