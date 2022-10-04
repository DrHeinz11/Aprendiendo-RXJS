import './CustomBox.css';
import { chakra } from '@chakra-ui/react';

const CustomBox = ({ background, sizes, children, align = 'center' }) => {
	return (
		<chakra.div
			className='box'
			display='flex'
			alignItems={align}
			justifyContent='center'
			width='100%'
			height={sizes.height}
			px={6}
			py={12}
			backgroundImage={{
				base: `url(${background.base})`,
				sm: `url(${background.md})`,
			}}
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
		>
			{children}
		</chakra.div>
	);
};

export default CustomBox;
