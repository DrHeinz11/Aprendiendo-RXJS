import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
const SearchBar = () => {
  const [selectedKeyboard, setSelectedKeyboard] = useState("");
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const handleToggleSearchBar = () => {
    setToggleSearchBar((searchBar) => !searchBar);
  };

  return (
    <Stack direction="row" align="center" p={2}>
      <Search2Icon onClick={handleToggleSearchBar} />
      {toggleSearchBar && <SearchInput />}
    </Stack>
  );
};

export default SearchBar;
