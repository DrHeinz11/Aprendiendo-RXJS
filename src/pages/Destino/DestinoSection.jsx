import { Box } from '@chakra-ui/react';
import { CustomBox } from '../../components/index';
import { FormDescription, ImageDescription } from './components';

const bg = {
	base: 'https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png',
	md: 'https://www.yomeanimo.com/wp-content/uploads/2022/01/Componente-8-–-5@2x.png',
};

const DestinoSection = () => {
	return (
		<Box bg='#E2E8F0'>
			<CustomBox
				align={'flex-start'}
				background={bg}
				sizes={{ height: { base: '155vh', md: '125vh', lg: '90vh' } }}
			>
				<FormDescription />
			</CustomBox>
			<ImageDescription />
		</Box>
	);
};

export default DestinoSection;
