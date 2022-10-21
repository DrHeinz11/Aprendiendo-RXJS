import { Grid, Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useServiceContext } from '../../context/context';

// eslint-disable-next-line react/prop-types
const CardService = ({ children, service, id, route }) => {
	const { focus, setFocus } = useServiceContext();
	return (
		<Link to={route}>
			<Grid
				onClick={() => setFocus({ value: service })}
				w='fit-content'
				cursor='pointer'
				placeContent='center'
				px={{ base: 9, md: 24 }}
				py={{ base: 3, md: 6 }}
				boxShadow={focus.value === service ? '2xl' : 'md'}
				borderRadius='xl'
				color={focus.value === service ? '#fff' : 'primary.darkGranate'}
				backgroundColor={
					focus.value === service ? 'primary.darkGranate' : '#fafafa'
				}
				_hover={{
					backgroundColor: 'primary.lightGranate',
					color: '#fff',
					fill: '#fff',
				}}
			>
				<HStack>
					<>{children}</>
					<Heading fontSize='xl'>{service}</Heading>
				</HStack>
			</Grid>
		</Link>
	);
};

export default CardService;
