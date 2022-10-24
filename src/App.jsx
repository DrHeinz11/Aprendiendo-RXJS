import './App.css';
import { dataHeader } from './constants/dataHeader';
import RoutesApp from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';
import { Footer, FooterCopyright, Navbar } from './components';
import { Divider } from '@chakra-ui/react';
import NewsLetter from './components/Newsletter/NewsLetter';
function App() {
	return (
		<BrowserRouter>
			<>
				<Navbar data={dataHeader} />
				<RoutesApp />
				<Divider my='5' />
				<NewsLetter />
				<Footer />
				<FooterCopyright />
			</>
		</BrowserRouter>
	);
}

export default App;
