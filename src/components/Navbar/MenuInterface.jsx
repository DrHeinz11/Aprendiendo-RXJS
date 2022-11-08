import { Box, Stack } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const MenuInterface = ({ setToggleMenu }) => {
	const handleToggleMenu = () => setToggleMenu(prev => !prev);
	return (
		<>
			<Box
				maxW='full'
				w='full'
				h='100vh'
				zIndex='100'
				position='fixed'
				top='0'
				left='0'
				margin='0 !important'
				bg='rgba(33 37 41 /75%)'
				align='center'
				justify='center'
				onClick={() => setToggleSearchBar(prev => !prev)}
			/>
			<Stack
				boxSize='full'
				overflowY={'scroll'}
				zIndex='modal'
				position='absolute'
				top='0'
				left='0'
				gap='5'
				px='4'
				bg='#fafafa'
				justify='center'
				h='100vh'
			>
				<Box
					position='absolute'
					color='white'
					bg='primary.pinkChicle'
					p='2'
					top='6'
					right='6'
					borderRadius='sm'
				>
					<CloseIcon
						alignSelf='left'
						boxSize='20px'
						onClick={handleToggleMenu}
					/>
				</Box>

				<Link onClick={handleToggleMenu} className='links' to='/comienza-aqui/'>
					Comienza aquí
				</Link>
				<Link
					onClick={handleToggleMenu}
					className='links'
					to='/working-holiday/visa'
				>
					Working Holiday
				</Link>
				<Link onClick={handleToggleMenu} className='links' to='/destinos/'>
					Destinos
				</Link>
				<Link onClick={handleToggleMenu} className='links' to='/services/'>
					Servicios
				</Link>
				<Link onClick={handleToggleMenu} className='links' to='/comunidad/'>
					Comunidad
				</Link>
				<Link onClick={handleToggleMenu} className='links' to='/blog/all'>
					Artículos
				</Link>
			</Stack>
		</>
	);
};

export default MenuInterface;
