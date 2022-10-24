import { Stack, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import data from '../../constants/constantData/dataCardCountry';
import HamburgerMenu from './HamburgerMenu';
import SearchBar from './SearchBar';

const Navbar = ({ data: { imgUrl, imgAlt, imgKey } }) => {
	return (
		<Stack
			direction='row'
			gap={4}
			wrap={'nowrap'}
			align='center'
			justify={{ base: 'space-between', md: 'space-around' }}
			px={6}
			py={3}
		>
			<Link to='/'>
				<Image
					src={imgUrl}
					alt={imgAlt}
					key={imgKey}
					_hover={{ opacity: 0.7, trasition: 'opacity 300ms' }}
					size={'md'}
					minW='120px'
				/>
			</Link>
			<Stack
				direction='row'
				gap='3'
				display={{ base: 'none', md: 'flex' }}
				alignItems='center'
				textAlign='center'
			>
				<Link className='links' to='/comienza-aqui/'>
					Comienza aquí
				</Link>
				<Link className='links' to='/working-holiday/visa'>
					Working Holiday
				</Link>
				<Link className='links' to='/destinos/'>
					Destinos
				</Link>
				<Link className='links' to='/services/'>
					Servicios
				</Link>
				<Link className='links' to='/comunidad/'>
					Comunidad
				</Link>
				<Link className='links' to='/blog/:id'>
					Artículos
				</Link>
			</Stack>
			<SearchBar />
			<Box display={{ base: 'block', md: 'none' }}>
				<HamburgerMenu />
			</Box>
		</Stack>
	);
};

export default Navbar;
