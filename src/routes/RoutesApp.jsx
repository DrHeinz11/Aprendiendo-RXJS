import {
	Home,
	InfoVisaSection,
	ComienzaAqui,
	WorkingHoliday,
	Comunidad,
	Articulos,
	DestinoSection,
} from '../pages';

import { Route, Routes } from 'react-router-dom';

const RoutesApp = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/country/:id' element={<InfoVisaSection />} />
			<Route path='/comienza-aqui/' element={<ComienzaAqui />} />
			{/* { <Route path="/services/" element={<Servicio />} />} */}
			<Route path='/working-holiday/:id' element={<WorkingHoliday />} />
			<Route path='/comunidad/' element={<Comunidad />} />
			<Route path='/blog/:id' element={<Articulos />} />
			<Route path='/working-holiday/visa' element={<InfoVisaSection />} />
			<Route path='/destinos/' element={<DestinoSection />} />
		</Routes>
	);
};

export default RoutesApp;
