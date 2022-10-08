import { Box } from '@chakra-ui/react';
import { CustomBox } from '../../components/index';
import { FormDescription, ImageDescription } from './components';
import { BackgroundCustomBox } from '../../constants';

const DestinoSection = () => {
	return (
		<Box bg='#E2E8F0' position='relative'>
			<CustomBox
				align={'flex-start'}
				sizes={{ height: { base: '125vh', md: '100vh', lg: '70vh' } }}
				background={BackgroundCustomBox}
			>
			</CustomBox>
				<FormDescription />
			<ImageDescription />
		</Box>
	);
};

export default DestinoSection;
