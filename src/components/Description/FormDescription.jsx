import {
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { sharingDescriptions } from "../services/sharing-description.service";
const FormDescription = () => {
  const [selectedCountry, setSelectedCountry] = useState("Select your country");
  const [selectedAge, setSelectedAge] = useState("Select your age");

  const handleEventValue = (ev, funct) => funct(ev.target.value);

  const handleSelectedInfo = (country, age) => {
    const result = {
      country: country !== "Select your country" && country,
      age: age !== "Select your age" && age,
    };

    if (!result.country && !result.age) {
      return alert("complete options");
    }
    sharingDescriptions.setSubject(result);
  };

  return (
    <Stack
      p={10}
      direction="row"
      justify="space-between"
      spacing={20}
      bg="teal.200"
      w="full"
    >
      <Menu>
        <MenuButton
          borderRadius="xl"
          bg="teal.700"
          py={4}
          px={8}
          minW="200px"
          color="#fff"
        >
          {selectedCountry}
        </MenuButton>
        <MenuList minW="140px">
          <MenuItem
            value="Australia"
            onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
          >
            Australia
          </MenuItem>
          <MenuItem
            value="NewZealand"
            onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
          >
            New Zealand
          </MenuItem>
          <MenuItem
            value="Austria"
            onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
          >
            Austria
          </MenuItem>
          <MenuItem
            value="Denmark"
            onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
          >
            Denmark
          </MenuItem>
          <MenuItem
            value="Spain"
            onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
          >
            Spain
          </MenuItem>
          <MenuItem
            value="Argentina"
            onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
          >
            Argentina
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu minW="140px">
        <MenuButton>{selectedAge}</MenuButton>
        <MenuList>
          <MenuItem
            value="18-28"
            onClick={(ev) => handleEventValue(ev, setSelectedAge)}
          >
            18-28
          </MenuItem>
          <MenuItem
            value=" 28-33"
            onClick={(ev) => handleEventValue(ev, setSelectedAge)}
          >
            28-33
          </MenuItem>
          <MenuItem
            value="33-99"
            onClick={(ev) => handleEventValue(ev, setSelectedAge)}
          >
            33-99
          </MenuItem>
        </MenuList>
        <Button
          colorScheme={"teal"}
          onClick={() => handleSelectedInfo(selectedCountry, selectedAge)}
        >
          Enviar
        </Button>
      </Menu>
    </Stack>
  );
};

export default FormDescription;
