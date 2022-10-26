import { Text, Image, Grid } from '@chakra-ui/react';

const ExperienceCard = ({ props: { imgUrl, imgTitle, text } }) => {
	return (
		<Grid
			direction='column'
			boxSize='200px'
			p={2}
			justifyItems='center'
			placeContent='center'
		>
			<Image boxSize='105px' src={imgUrl} alt={imgTitle} />
			<Text>{text}</Text>
		</Grid>
	);
};

export default ExperienceCard;
