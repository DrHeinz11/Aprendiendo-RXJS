import { useContext, useState, createContext } from 'react';
import {
	dataFormDestino,
	dataFormAge,
} from '../../../constants/dataFormDestino';

export const DestinoContext = createContext();

const initialState = {
	id: '',
	age: '',
	passport: '',
};
export const DestinoProvider = ({ children }) => {
	const [destino, setDestino] = useState(initialState);
	return (
		<DestinoContext.Provider
			value={{ destino, setDestino, dataFormDestino, dataFormAge }}
		>
			{children}
		</DestinoContext.Provider>
	);
};

export const useDestinoContext = () => {
	const context = useContext(DestinoContext);

	if (context === undefined) {
		throw new Error('useServiceContext must be used within a DestinoContext');
	}
	return context;
};
