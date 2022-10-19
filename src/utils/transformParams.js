import { useParams } from 'react-router-dom';

export const transformParams = () => {
	const { id } = useParams();
	return id.split('-').join(' ');
};
