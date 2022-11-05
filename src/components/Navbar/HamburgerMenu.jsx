import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import MenuInterface from './MenuInterface';

const HamburgerMenu = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const handleToggleMenu = () => {
		setToggleMenu(prev => !prev);
	};
	return (
		<>
			<HamburgerIcon boxSize='28px' onClick={handleToggleMenu} />
			{toggleMenu && <MenuInterface setToggleMenu={setToggleMenu} />}
		</>
	);
};

export default HamburgerMenu;
