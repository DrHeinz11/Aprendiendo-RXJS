import { chakra } from '@chakra-ui/react';

const Elipse = () => (
	<chakra.svg
		display={{ base: 'none', md: 'block' }}
		xmlns='http://www.w3.org/2000/svg'
		width='146'
		height='300'
		viewBox='0 0 146 146'
		position='absolute'
		left='16rem'
		zIndex={1}
	>
		<circle
			id='Elipse_1'
			data-name='Elipse 1'
			cx='73'
			cy='73'
			r='73'
			fill='#ccf8f6'
			zIndex={1}
		/>
	</chakra.svg>
);

export default Elipse;
