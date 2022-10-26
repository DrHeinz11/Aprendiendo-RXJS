import {
	Home,
	InfoVisaSection,
	ComienzaAqui,
	WorkingHoliday,
	Comunidad,
	Articulos,
	DestinoSection,
	ServicioHome,ArticulosAll
} from '../pages';

import { Route, Routes } from 'react-router-dom';

const RoutesApp = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/country/:id' element={<WorkingHoliday />} />
			<Route path='/comienza-aqui/' element={<ComienzaAqui />} />
			{/* <Route path='/services/:id' element={<Servicio />} /> */}
			<Route path='/services/' element={<ServicioHome />} />
			<Route path='/working-holiday/visa' element={<InfoVisaSection />} />
			<Route path='/comunidad/' element={<Comunidad />} />
			<Route path='/blog/:id' element={<Articulos />} />
			<Route path='/blog/all' element={<ArticulosAll />} />
			<Route path='/destinos/' element={<DestinoSection />} />
		</Routes>
	);
};

export default RoutesApp;
