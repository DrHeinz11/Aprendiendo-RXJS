import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({

	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
	colors: {
		primary: {
			granate: '#6a3765',
			darkGranate: '#43173d ',
			lightGranate: '#5A0045',
			lightAqua: '#cbfcf9',
			darkAqua: '#00dbd0 ',
		},
	},
});

export default theme;
