import { MenuItem } from '@chakra-ui/react';

const MenuCountryOption = ({ id, heading, setSelected }) => {
	const handleEventValue = (ev, funct) => funct({ value: ev.target.value, id });
	return (
		<MenuItem value={heading} onClick={ev => handleEventValue(ev, setSelected)}>
			{heading}
		</MenuItem>
	);
};

export default MenuCountryOption;
