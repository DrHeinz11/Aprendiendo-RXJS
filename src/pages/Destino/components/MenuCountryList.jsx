import { Menu, MenuButton, MenuList } from '@chakra-ui/react';

const MenuCountryList = ({ children, selected }) => {
	return (
		<Menu>
			<MenuButton
				py={4}
				px={8}
				w='full'
				borderRadius='xl'
				bg='#fafafa'
				color='primary.darkGranate'
				fontWeight='bold'
				fontSize='lg'
				textTransform='capitalize'
			>
				{selected}
			</MenuButton>
			<MenuList maxH='175px' borderWidth='0' overflowY='scroll' minW='250px'>
				{children}
			</MenuList>
		</Menu>
	);
};

export default MenuCountryList;
