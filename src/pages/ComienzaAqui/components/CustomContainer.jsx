import { Heading, Stack, Image, Text, chakra } from '@chakra-ui/react';
import CustomButtomRoute  from '../../../components/custom/CustomButtonRoute';

const CustomContainer = ({
	illustrationUrl,
	illustrationName,
	heading,
	paragraph,
	textButton,
	direction,
	id,
	signal,
	route,
}) => {
	const directions = direction % 2 === 0 ? 'row' : 'row-reverse';
	return (
		<Stack
			direction={{ base: 'column', md: directions }}
			spacing={20}
			w={{ base: 'container.xs', lg: 'container.lg' }}
			justify='center'
			py={5}
			px={2}
			align='center'
		>
			<Image
				src={illustrationUrl}
				alt={illustrationName}
				boxSize={{
					base: '16rem',
					sm: '18rem',
					md: '20rem',
					lg: '22rem',
					xl: '26rem',
				}}
			/>
			<Stack spacing='none' gap='5' alignItems={{ base: 'center', md: 'auto' }}>
				<Heading
					display='flex'
					gap={2}
					flexWrap='wrap'
					alignItems='stretch'
					color='primary.darkGranate'
					fontSize='3xl'
					fontWeight='bold'
					key={`${id}${heading}`}
				>
					<chakra.span
						color='primary.darkAqua'
						fontSize={{ base: '2xl', md: '4xl' }}
						fontWeight='bold'
					>{`${id}.`}</chakra.span>
					{heading}
				</Heading>
				<Text fontSize={{ base: 'md', md: 'xl' }}>{paragraph}</Text>
				{textButton && (
					<CustomButtomRoute
						textButton={textButton}
						signalButton={signal}
						sizeButton={{ base: 'md', md: 'lg' }}
						route={route}
					/>
				)}
			</Stack>
		</Stack>
	);
};

export default CustomContainer;
