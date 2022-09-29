import { Box, Stack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const MenuInterface = ({ setToggleMenu }) => {
  const handleToggleMenu = () => setToggleMenu((prev) => !prev);
  return (
    <>
      <Box
        maxW="full"
        w="full"
        h="100vh"
        zIndex="100"
        position="fixed"
        top="0"
        left="0"
        margin="0 !important"
        bg="rgba(33 37 41 /75%)"
        align="center"
        justify="center"
        onClick={() => setToggleSearchBar((prev) => !prev)}
      />
      <Stack
        boxSize="full"
        overflowY={"scroll"}
        zIndex="modal"
        position="absolute"
        top="0"
      >
        <Box>
          <CloseIcon
            position="relative"
            top="7"
            alignSelf="left"
            boxSize="20px"
            onClick={handleToggleMenu}
          />
          {/* {menuOptions.map((element) => (
            <OptionMenu props={element} />
        ))} */}
        </Box>
      </Stack>
    </>
  );
};

export default MenuInterface;
