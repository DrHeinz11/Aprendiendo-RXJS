import NotFound404 from './components/NotFound404';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const InfoVisaSection = lazy(() =>
	import('../pages/WorkingHoliday/InfoVisaSection')
);
const WorkingHoliday = lazy(() =>
	import('../pages/WorkingHoliday/WorkingHoliday')
);
const ComienzaAqui = lazy(() => import('../pages/ComienzaAqui/ComienzaAqui'));
const Comunidad = lazy(() => import('../pages/Comunidad/Comunidad'));
const DestinoSection = lazy(() => import('../pages/Destino/DestinoSection'));
const Articulos = lazy(() => import('../pages/Articulos/Articulos'));
const ArticulosAll = lazy(() => import('../pages/Articulos/ArticulosAll'));
const ServicioHome = lazy(() => import('../pages/Servicio/ServicioHome'));

const RoutesApp = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='*' element={<NotFound404 />} />
			<Route path='/country/:id' element={<WorkingHoliday />} />
			<Route path='/comienza-aqui/' element={<ComienzaAqui />} />
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
