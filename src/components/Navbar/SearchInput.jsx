import { useState } from "react";
import { chakra } from "@chakra-ui/react";
const SearchInput = ({ setSelectedKeyboard, display }) => {
  const [keywoard, setKeyboard] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSelectedKeyboard(keywoard);
  };
  return (
    <form
      display={!display ? "none" : "block"}
      onSubmit={(evt) => handleSubmit(evt)}
    >
      <chakra.input
        display={!display ? "none" : "block"}
        bg="gray.400"
        type="text"
        placeholder="Search..."
        value={keywoard}
        onChange={(evt) => setKeyboard(evt.target.value)}
      />
    </form>
  );
};

export default SearchInput;
