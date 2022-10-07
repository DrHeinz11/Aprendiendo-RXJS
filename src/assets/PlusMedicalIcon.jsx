import { chakra } from '@chakra-ui/react';

const PlusMedicalIcon = ({ fill }) => (
	<chakra.svg
		xmlns='http://www.w3.org/2000/svg'
		width={'36px'}
		height={'36px'}
		viewBox='0 0 24 24'
		fill={fill}
	>
		<path d='M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z' />
	</chakra.svg>
);

export default PlusMedicalIcon;
