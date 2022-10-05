import './App.css';
import { dataHeader } from './constants/dataHeader';
import RoutesApp from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';
import { Footer, FooterCopyright, Navbar } from './components';
import { Divider } from '@chakra-ui/react';
function App() {
	return (
		<BrowserRouter>
			<>
				<Navbar data={dataHeader} />
				<RoutesApp />
				<Divider />
				<Footer />
				<FooterCopyright />
			</>
		</BrowserRouter>
	);
}

export default App;
