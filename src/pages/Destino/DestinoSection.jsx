import { Box } from '@chakra-ui/react';
import { CustomBox } from '../../components/index';
import { FormDescription, ImageDescription } from './components';
import { BackgroundCustomBox } from '../../constants';
import { DestinoProvider } from './context/context';

const DestinoSection = () => {
	return (
		<Box bg='#f1f1f1' minH={'100vh'} position='relative'>
			<DestinoProvider>
				<CustomBox
					align={'center'}
					sizes={{
						height: { base: '50rem', sm: '40rem', md: '38rem', lg: '32rem' },
					}}
					background={BackgroundCustomBox}
				>
					<FormDescription />
				</CustomBox>
				<ImageDescription />
			</DestinoProvider>
		</Box>
	);
};

export default DestinoSection;
