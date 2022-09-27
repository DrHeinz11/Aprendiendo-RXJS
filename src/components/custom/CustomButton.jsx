import { Button } from "@chakra-ui/react";
import useTransform from "../../utils/useTransform";
import { Link } from "react-router-dom";
const CustomButton = ({ textButton, signalButton, sizeButton, route }) => {
  const textoButton = useTransform(textButton, signalButton);
  return (
    <Link to={route}>
      <Button
        colorScheme={"red"}
        bg="#EA2250"
        size={sizeButton}
        borderRadius="xl"
        w="fit-content"
        textTransform="initial"
        fontSize={{ base: "lg", md: "xl" }}
        py={6}
        px={10}
      >
        {textoButton}
      </Button>
    </Link>
  );
};

export default CustomButton;
