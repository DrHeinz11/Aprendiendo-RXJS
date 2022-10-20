import { HStack, Image, Text } from '@chakra-ui/react';

const BenefitsCard = ({ texto }) => {
	return (
		<HStack spacing='4' align='center'>
			<Image
				src='https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/icon-check.svg'
				alt='checkIcon'
				boxSize='68px'
			/>
			<Text>{texto}</Text>
		</HStack>
	);
};

export default BenefitsCard;
