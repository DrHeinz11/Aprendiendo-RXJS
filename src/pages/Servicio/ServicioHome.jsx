import { GraduationIcon, PlusMedicalIcon } from '../../assets';
import { CardService } from './components';

const ServicioHome = () => {
	return (
		<>
			<CardService service={'Cursos'}>
				<GraduationIcon fill={'current'} />
			</CardService>

			<CardService service={'Seguros de viaje'}>
				<PlusMedicalIcon fill={'current'} />
			</CardService>
		</>
	);
};

export default ServicioHome;
