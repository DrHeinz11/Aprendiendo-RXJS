import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Elipse from '../../assets/Elipse';
import { SliderHeader, Slides } from './components';

const CustomSlider = ({ children, number, title }) => {
	const [actionSlide, setActionSlide] = useState(0);
	const [widthSlide, setWidthSlide] = useState('');

	const scrollMethods = {
		scrollRight(setActionSlide) {
			setActionSlide(prev => (prev >= widthSlide ? 0 : prev + 280));
		},
		scrollLeft(setActionSlide) {
			setActionSlide(prev => (prev <= 0 ? widthSlide + 10 : prev - 280));
		},
	};

	return (
		<>
			<Stack
				px={{ base: 0, md: 4 }}
				my='10'
				direction={{ base: 'column', md: 'row' }}
				alignItems='center'
				position='relative'
			>
				{number && title ? (
					<>
						<SliderHeader number={number} title={title} />
						<Elipse />
					</>
				) : (
					''
				)}
				<ChevronLeftIcon
					onClick={() => scrollMethods.scrollLeft(setActionSlide)}
					opacity={actionSlide === 0 ? '0' : '1'}
					cursor='pointer'
					width='3rem'
					height='3rem'
					borderRadius='full'
					zIndex={100}
					bg='#fff'
					border='3px solid var(--chakra-colors-primary-darkGranate)'
					_hover={{
						borderColor: 'var(--chakra-colors-primary-pinkChicle)',
						color: 'var(--chakra-colors-primary-pinkChicle)',
						opacity: '1',
						transition: 'all 300ms ease 0s',
					}}
					display={{ base: 'none', md: 'block' }}
				/>
				<Slides traslate={actionSlide} setWidthSlide={setWidthSlide}>
					{children}
				</Slides>
				<ChevronRightIcon
					onClick={() => scrollMethods.scrollRight(setActionSlide)}
					cursor='pointer'
					width='3rem'
					height='3rem'
					borderRadius='full'
					zIndex={100}
					bg='#fff'
					border='3px solid var(--chakra-colors-primary-darkGranate)'
					_hover={{
						borderColor: 'var(--chakra-colors-primary-pinkChicle)',
						transition: 'all 300ms ease 0s',
					}}
					display={{ base: 'none', md: 'block' }}
				/>
			</Stack>
		</>
	);
};

export default CustomSlider;
