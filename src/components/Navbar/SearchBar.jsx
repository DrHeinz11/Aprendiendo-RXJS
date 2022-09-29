import { useEffect, useState } from "react";
import { sharingSearchInfo } from "../../services/sharing-searchInfo.service";
import { Search2Icon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
const SearchBar = () => {
  const [selectedKeyboard, setSelectedKeyboard] = useState("");
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchBarSubscription$ = sharingSearchInfo.getSearchSubject();
  useEffect(() => {
    searchBarSubscription$.subscribe((data) => setSelectedKeyboard(data));
  }, []);

  const handleToggleSearchBar = () => {
    setToggleSearchBar((searchBar) => !searchBar);
  };

  return (
    <Stack direction="row" align="center" p={2}>
      <Search2Icon boxSize='1.25rem' onClick={handleToggleSearchBar} />
      {toggleSearchBar && (
        <SearchInput setToggleSearchBar={setToggleSearchBar} />
      )}
    </Stack>
  );
};

export default SearchBar;
