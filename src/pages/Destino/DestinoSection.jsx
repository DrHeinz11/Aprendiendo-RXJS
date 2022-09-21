import { Box, Checkbox, Heading, Stack, chakra } from "@chakra-ui/react";
import NationalityPopover from "./NationalityPopover";
import dataCardCountry from "../../constants/constantData/dataCardCountry";
import { useState } from "react";
import { CustomButton, CustomBox } from "../../components/index";
import NationalityOption from "./NationalityOption";
import DestinoCard from "./DestinoCard";

const bg = {
  base: "https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png",
  md: "https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png",
};

const DestinoSection = () => {
  const [nationBox, setNationBox] = useState(false);
  const handleNationClick = () => setNationBox((state) => !state);
  const [ageBox, setAgeBox] = useState(false);
  const handleAgeClick = () => setAgeBox((state) => !state);
  const [checkbox, setChekbox] = useState(false);
  const handleCheckboxClick = () => setChekbox((prev) => !prev);
  const [optionState, setOptionState] = useState(1);
  const handleOptionState = (id) => setOptionState(id);
  const dataDefaults = {
    title: dataCardCountry[optionState - 1].title,
    flagUrl: dataCardCountry[optionState - 1].flagUrl,
    id: dataCardCountry[optionState - 1].id,
    handleOptionState,
  };
  return (
    <Box bg="#E2E8F0">
      <CustomBox
        background={bg}
        sizes={{ height: { base: "auto", md: "25rem" } }}
      >
        <Stack alignItems={"center"}>
          <Heading textAlign="center" fontSize="5xl" color="#fff" mb={8}>
            Viajá y Trabajá por el mundo!
          </Heading>
          <Stack
            gap={6}
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            p={8}
            bg="primary.lightGranate"
            w="fit-content"
            margin="0 auto"
            borderRadius="xl"
          >
            <Box onClick={handleNationClick} w="150px">
              <Heading marginLeft={1} fontSize="md" color="#f1f1f1">
                Nacionalidad
              </Heading>
              <Stack
                borderRadius="xl"
                direction="column"
                justifyContent="center"
                bg={"#fff"}
                zIndex="11"
              >
                <NationalityOption
                  title={dataDefaults.title}
                  flagUrl={dataDefaults.flagUrl}
                  id={dataDefaults.id}
                  handleOptionState={dataDefaults.handleOptionState}
                />
                <Box
                  position="absolute"
                  maxH="150px"
                  overflowY={"auto"}
                  top={{
                    base: "27.75rem",
                    sm: "23.5rem",
                    md: "19rem",
                  }}
                  zIndex="100"
                >
                  {nationBox && (
                    <NationalityPopover
                      handleOptionState={handleOptionState}
                      dataCard={dataCardCountry}
                    />
                  )}
                </Box>
              </Stack>
            </Box>

            <Box onClick={handleAgeClick}>
              <Heading marginLeft={4} fontSize="md" color="#f1f1f1">
                Edad
              </Heading>
              <Box borderRadius="xl" w={40} h={12} bg={"#fff"}></Box>
              {ageBox && (
                <Box borderRadius="xl" w={40} h={12} bg={"#fff"}></Box>
              )}
            </Box>
            <Box>
              <chakra.input
                type="check"
                as={Checkbox}
                colorScheme="red"
                onClick={handleCheckboxClick}
              >
                <Heading fontSize="md" color="#f1f1f1">
                  Tengo pasaporte adicional
                </Heading>
              </chakra.input>
            </Box>

            <CustomButton route="/services/" textButton="consultar" />
          </Stack>
        </Stack>
      </CustomBox>
      <Stack
        flexWrap="wrap"
        direction="row"
        justify="center"
        gap="5"
        width="100%"
        paddingY={10}
      >
        {dataCardCountry.map(
          (element) =>
            element.id === optionState && (
              <DestinoCard key={element.id} element={element} />
            )
        )}
      </Stack>
    </Box>
  );
};

export default DestinoSection;
