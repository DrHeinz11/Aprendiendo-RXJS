import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, chakra, Stack } from "@chakra-ui/react";

import { sharingSearchInfo } from "../../services/sharing-searchInfo.service";

const SearchInput = ({ setToggleSearchBar }) => {
  const [keywoard, setKeyboard] = useState("");

  const handleToggleSearchBar = () => {
    sharingSearchInfo.setSearchSubject(keywoard);
    setTimeout(() => {
      setToggleSearchBar((prev) => !prev);
    }, 300);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleToggleSearchBar();
  };

  return (
    <>
      <Box
        maxW="full"
        w="full"
        h="100vh"
        zIndex="base"
        position="fixed"
        top="0"
        left="0"
        margin="0 !important"
        bg="rgba(33 37 41 /75%)"
        align="center"
        justify="center"
        onClick={() => setToggleSearchBar((prev) => !prev)}
      />
      <Box
        maxW="full"
        w="full"
        zIndex="modal"
        position="absolute"
        top="0"
        left="0"
        margin="0 !important"
      >
        <chakra.form
          display={"grid"}
          placeContent="center"
          bg="#fff"
          w="full"
          h="150"
          onSubmit={(evt) => handleSubmit(evt)}
          zIndex="1000"
        >
          <Stack
            direction="row"
            align="center"
            px={4}
            py={2}
            w="xl"
            border="1px solid black"
            borderRadius="full"
            justify="space-between"
          >
            <chakra.input
              type="text"
              h="full"
              w="full"
              px={1}
              color="#000"
              placeholder="Search..."
              value={keywoard}
              onChange={(evt) => setKeyboard(evt.target.value)}
            />
            <Button onClick={handleToggleSearchBar} borderRadius="full">
              <Search2Icon />
            </Button>
          </Stack>
        </chakra.form>
      </Box>
    </>
  );
};

export default SearchInput;
