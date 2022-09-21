import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

const TagFlag = () => {
  return (
    <Tag
      size="lg"
      colorScheme="teal"
      borderRadius="full"
      py={4}
      width="fit-content"
      h="fit-content"
    >
      <Avatar
        src="https://static.vecteezy.com/system/resources/previews/007/686/663/non_2x/australia-flag-circle-image-and-icon-free-vector.jpg"
        size="sm"
        bg="none"
        name="Segun Adebayo"
        ml={-1}
        mr={2}
      />
      <TagLabel color={"black"} textTransform={"capitalize"}>
        australia
      </TagLabel>
    </Tag>
  );
};

export default TagFlag;
