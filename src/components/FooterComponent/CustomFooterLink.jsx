import { Link } from 'react-router-dom';
import useTransform from '../../utils/useTransform';
import { Stack } from '@chakra-ui/react';

const CustomFooterLink = ({ props }) => {
	return (
		<Stack direction='column'>
			{props.map((e, index) => {
				const routeName = useTransform(e.routeName);
				return (
					<Link className='links-footer' key={e.routeName + index} to={e.route}>
						{routeName}
					</Link>
				);
			})}
		</Stack>
	);
};

export default CustomFooterLink;
