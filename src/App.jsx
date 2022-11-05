import './App.css';
import { dataHeader } from './constants/dataHeader';
import RoutesApp from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';
import { Footer, FooterCopyright, Navbar } from './components';
import { Divider } from '@chakra-ui/react';
import NewsLetter from './components/Newsletter/NewsLetter';
import { Suspense } from 'react';
import Loader from './routes/components/Loader';
function App() {
	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<Navbar data={dataHeader} />
				<RoutesApp />
				<Divider my='5' />
				<NewsLetter />
				<Footer />
				<FooterCopyright />
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
