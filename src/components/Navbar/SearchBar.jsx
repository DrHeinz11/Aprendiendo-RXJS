import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
const SearchBar = () => {
  const [selectedKeyboard, setSelectedKeyboard] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  useEffect(() => {
    console.log(setSelectedKeyboard);
  }, [setSelectedKeyboard]);
  const handleSearchBar = () => {
    setSearchBar((searchBar) => !searchBar);
  };
  return (
    <Stack direction="row" align="center" bg={searchBar && "gray.400"} p={2}>
      <SearchInput
        display={searchBar}
        setSelectedKeyboard={setSelectedKeyboard}
      />
      <Search2Icon onClick={handleSearchBar} />
    </Stack>
  );
};

export default SearchBar;
