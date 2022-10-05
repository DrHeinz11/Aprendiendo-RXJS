import { Link } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import { useTransform, handleScrollToTop } from '../../utils';

const CustomFooterLink = ({ props }) => {
	return (
		<Stack direction='column'>
			{props.map((e, index) => {
				const routeName = useTransform(e.routeName);
				return (
					<Link
						onClick={handleScrollToTop}
						className='links-footer'
						key={e.routeName + index}
						to={e.route}
					>
						{routeName}
					</Link>
				);
			})}
		</Stack>
	);
};

export default CustomFooterLink;
