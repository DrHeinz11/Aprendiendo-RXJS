import { Stack, Heading, Box } from '@chakra-ui/react';
import { useState } from 'react';
import CustomButonOnly from '../../../components/custom/CustomButtonOnly';
import { dataFormDestino, dataFormAge } from '../../../constants';
import { sharingDescriptions } from '../../../services';
import { MenuCountryList, MenuCountryOption } from './index';

const FormOption = () => {
	const [selectedCountry, setSelectedCountry] = useState({
		value: 'Select your country',
	});
	const [selectedAge, setSelectedAge] = useState({ value: 'Select your age' });

	const handleSelectedInfo = (country, age) => {
		const result = {
			country: country.value !== 'Select your country' && country,
			age: age.value !== 'Select your age' && age.value.split('-'),
		};

		if (!result.country && !result.age) {
			return alert('complete options');
		}
		sharingDescriptions.setSubject(result);
	};

	return (
		<Stack
			p={10}
			direction='row'
			justifyContent={{ base: 'center', lg: 'space-between' }}
			alignItems='flex-end'
			wrap={'wrap'}
			gap={{ base: 4, md: 10, lg: 20 }}
			bg='primary.lightGranate'
			borderRadius='3xl'
			boxShadow='0px 2px 10px rgba(255,255,255,0.25)'
			w='full'
		>
			<Stack direction='row' wrap='wrap' justifyContent='center' gap={2}>
				<Box minW='250px'>
					<Heading fontSize='lg' color='#fff' fontWeight='bold' mb={2}>
						Country
					</Heading>
					<MenuCountryList selected={selectedCountry.value}>
						{dataFormDestino.map(element => (
							<MenuCountryOption
								heading={element.country}
								value={element.value}
								setSelected={setSelectedCountry}
								key={element.key}
								id={element.id}
							/>
						))}
					</MenuCountryList>
				</Box>
				<Box margin='0 !important' minW='250px'>
					<Heading fontSize='lg' color='#fff' fontWeight='bold' mb={2}>
						Age
					</Heading>
					<MenuCountryList selected={selectedAge.value}>
						{dataFormAge.map(element => (
							<MenuCountryOption
								heading={element.heading}
								setSelected={setSelectedAge}
								key={element.key}
								id={element.id}
							/>
						))}
					</MenuCountryList>
				</Box>
			</Stack>
			<Box
				margin='0 !important'
				onClick={() => handleSelectedInfo(selectedCountry, selectedAge)}
			>
				<CustomButonOnly>Consultar</CustomButonOnly>
			</Box>
		</Stack>
	);
};

export default FormOption;
