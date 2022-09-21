import { Divider, Stack } from "@chakra-ui/react";

import CustomBoxLink from "../FooterComponent/CustomBoxLink";
import routesFooter from "../../constants/constantData/routesFooter";

const Footer = () => {
  return (
    <Stack px={10} py={5}>
      <CustomBoxLink props={routesFooter} />
    </Stack>
  );
};

export default Footer;
