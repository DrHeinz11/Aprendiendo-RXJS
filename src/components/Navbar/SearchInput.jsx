import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Button, chakra, Stack } from "@chakra-ui/react";

const SearchInput = ({}) => {
  const [keywoard, setKeyboard] = useState("");

  return (
    <Stack
      maxW="full"
      w="full"
      h="100vh"
      zIndex="modal"
      display={"block"}
      position="fixed"
      top="0"
      left="0"
      margin="0 !important"
      bg="rgba(33 37 41 /75%)"
      align="center"
      justify="center"
      onClick={handleToggleSearchBar}
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
            display={!toggleSearchBar ? "none" : "block"}
            type="text"
            h="full"
            w="full"
            px={1}
            color="#000"
            placeholder="Search..."
            value={keywoard}
            onChange={(evt) => setKeyboard(evt.target.value)}
          />
          <Button onClick={handleSubmit} borderRadius="full">
            <Search2Icon />
          </Button>
        </Stack>
      </chakra.form>
    </Stack>
  );
};

export default SearchInput;
