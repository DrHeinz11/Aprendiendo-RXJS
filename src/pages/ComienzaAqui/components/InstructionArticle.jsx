import CustomContainer from "./CustomContainer";

import { Image, Stack } from "@chakra-ui/react";
import { dataComienzaAqui } from "../../../constants/";

const InstructionArticle = () => {
  return dataComienzaAqui.map((e, index) => (
    <Stack
      flexWrap="wrap"
      px={{ base: 4, md: 0 }}
      align="center"
      key={e.illustrationName + index}
    >
      <CustomContainer
        illustrationUrl={e.illustrationUrl}
        illustrationName={e.illustrationUrl}
        heading={e.heading}
        id={e.id}
        paragraph={e.paragraph}
        direction={e.id}
        textButton={e.textButton}
        signal={e.signal}
      />
      <Image
        h="15rem"
        key={`${e.id}:${e.illustrationName}`}
        src="https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/linea-punteada-2.svg"
      />
    </Stack>
  ));
};

export default InstructionArticle;
