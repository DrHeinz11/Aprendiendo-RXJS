import {
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  MenuList,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { sharingDescriptions } from "../../services/sharing-description.service";
import CustomButtomRouteOnly from "../../components/custom/CustomButonOnly";

const FormDescription = () => {
  const [selectedCountry, setSelectedCountry] = useState("Select your country");
  const [selectedAge, setSelectedAge] = useState("Select your age");

  const handleEventValue = (ev, funct) => funct(ev.target.value);

  const handleSelectedInfo = (country, age) => {
    const result = {
      country: country !== "Select your country" && country,
      age: age !== "Select your age" && age.split(","),
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
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="flex-end"
      wrap={"wrap"}
      gap={{ base: 4, md: 10, lg: 20 }}
      bg="primary.darkGranate"
      borderRadius="3xl"
      boxShadow="0px 2px 10px rgba(255,255,255,0.25)"
      w="full"
    >
      <Stack direction="row" wrap="wrap" justifyContent="center" gap={2}>
        <Box minW="250px">
          <Heading fontSize="lg" color="#fff" fontWeight="bold" mb={2}>
            Country
          </Heading>
          <Menu>
            <MenuButton
              py={4}
              px={8}
              w="full"
              borderRadius="xl"
              bg="#fafafa"
              color="primary.darkGranate"
              fontWeight="bold"
              fontSize="lg"
            >
              {selectedCountry}
            </MenuButton>
            <MenuList
              maxH="175px"
              borderWidth="0"
              overflowY="scroll"
              minW="250px"
            >
              <MenuItem
                value="Australia"
                onClick={(ev) => handleEventValue(ev, setSelectedCountry)}
              >
                Australia
              </MenuItem>
              <MenuItem
                value="New Zealand"
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
        </Box>
        <Box margin="0 !important" minW="250px">
          <Heading fontSize="lg" color="#fff" fontWeight="bold" mb={2}>
            Age
          </Heading>
          <Menu maxH="100px" overflow="scroll" width="full" minW="205px">
            <MenuButton
              margin="0 !important"
              py={4}
              px={8}
              width="full"
              borderRadius="xl"
              bg="#fafafa"
              color="primary.darkGranate"
              fontWeight="bold"
              fontSize="lg"
            >
              {selectedAge}
            </MenuButton>
            <MenuList width="full" minW={"205px"}>
              <MenuItem
                value="18,28"
                onClick={(ev) => handleEventValue(ev, setSelectedAge)}
              >
                18-28
              </MenuItem>
              <MenuItem
                value="28,33"
                onClick={(ev) => handleEventValue(ev, setSelectedAge)}
              >
                28-33
              </MenuItem>
              <MenuItem
                value="33,99"
                onClick={(ev) => handleEventValue(ev, setSelectedAge)}
              >
                33-99
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
      <Box
        margin="0 !important"
        onClick={() => handleSelectedInfo(selectedCountry, selectedAge)}
      >
        <CustomButtomRouteOnly>Consultar</CustomButtomRouteOnly>
      </Box>
    </Stack>
  );
};

export default FormDescription;
