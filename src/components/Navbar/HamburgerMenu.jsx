import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <>
      <HamburgerIcon boxSize="28px" onClick={handleToggleMenu} />
      {toggleMenu && <CloseIcon boxSize="20px" onClick={handleToggleMenu} />}
    </>
  );
};

export default HamburgerMenu;
