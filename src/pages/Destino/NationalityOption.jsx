import { Heading, Image, Stack } from "@chakra-ui/react";

const NationalityOption = ({ title, flagUrl, id, handleOptionState }) => {
  return (
    <Stack
      cursor="pointer"
      direction={"row"}
      borderRadius="xl"
      p={3}
      gap={4}
      align="center"
      backgroundColor="#ccc111"
      _hover={{ backgroundColor: "#f1f1f1" }}
      onClick={() => handleOptionState(id)}
    >
      <Image src={flagUrl} alt={title} />
      <Heading margin="0 !important" fontSize="sm">
        {title}
      </Heading>
    </Stack>
  );
};

export default NationalityOption;
