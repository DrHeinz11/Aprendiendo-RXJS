import { Box } from '@chakra-ui/react';
import { CustomBox } from '../../components/index';
import { FormDescription, ImageDescription } from './components';
import { BackgroundCustomBox } from '../../constants';

const DestinoSection = () => {
	return (
		<Box bg='#E2E8F0'>
			<CustomBox
				align={'flex-start'}
				sizes={{ height: { base: '155vh', md: '125vh', lg: '90vh' } }}
				background={BackgroundCustomBox}
			>
				<FormDescription />
			</CustomBox>
			<ImageDescription />
		</Box>
	);
};

export default DestinoSection;
