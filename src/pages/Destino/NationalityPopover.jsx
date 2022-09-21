import { Stack } from "@chakra-ui/react";
import NationalityOption from "./NationalityOption";

const NationalityPopover = ({ dataCard, handleOptionState }) => {
  const dataSliced = dataCard;
  return (
    <Stack bg="#ccc" height="fit-content" width="100%" zIndex="999" p={2}>
      {dataSliced.map((e) => (
        <NationalityOption
          handleOptionState={handleOptionState}
          key={e.id}
          id={e.id}
          title={e.title}
          flagUrl={e.flagUrl}
        />
      ))}
    </Stack>
  );
};

export default NationalityPopover;
