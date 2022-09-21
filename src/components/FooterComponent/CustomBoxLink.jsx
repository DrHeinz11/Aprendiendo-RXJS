import CustomFooterLink from "./CustomFooterLink";
import { Stack, Heading } from "@chakra-ui/react";
const CustomBoxLink = ({ props }) => {
  return (
    <Stack gap={10} justify={"center"} direction="row" flexWrap="wrap">
      {props.map((element, index) => (
        <Stack
          key={`${element.title}${index}`}
          flexWrap="wrap"
          display="flex"
          alignItems={"start"}
          maxW="fit-content"
        >
          <Heading fontSize="2xl">{element.title}</Heading>
          <CustomFooterLink props={element.routes} />
        </Stack>
      ))}
    </Stack>
  );
};
export default CustomBoxLink;
