import CustomFooterLink from './CustomFooterLink';
import { Stack, Heading } from '@chakra-ui/react';
import { routesFooter } from '../../constants';
const CustomBoxLink = () => {
	return (
		<>
			{routesFooter.map((element, index) => (
				<Stack
					key={`${element.title}${index}`}
					flexWrap='wrap'
					display='flex'
					alignItems={'start'}
					maxW='fit-content'
					margin='0 !important'
				>
					<Heading
						textTransform='uppercase'
						color='primary.darkGranate'
						fontSize='xl'
					>
						{element.title}
					</Heading>
					<CustomFooterLink props={element.routes} />
				</Stack>
			))}
		</>
	);
};
export default CustomBoxLink;
