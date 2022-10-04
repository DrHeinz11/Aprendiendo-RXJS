import './App.css';
import { dataHeader } from './constants/dataHeader';
import RoutesApp from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterCopyright from './components/FooterComponent/FooterCopyright';
function App() {
	return (
		<BrowserRouter>
			<>
				<Navbar data={dataHeader} />
				<RoutesApp />
				<FooterCopyright />
			</>
		</BrowserRouter>
	);
}

export default App;
