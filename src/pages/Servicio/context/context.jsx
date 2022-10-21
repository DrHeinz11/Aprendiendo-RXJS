import { useContext, useState, createContext } from 'react';

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
	const [focus, setFocus] = useState({ value: 'Cursos' });
	return (
		<ServiceContext.Provider value={{ focus, setFocus }}>
			{children}
		</ServiceContext.Provider>
	);
};

export const useServiceContext = () => {
	const context = useContext(ServiceContext);

	if (context === undefined) {
		throw new Error('useServiceContext must be used within a ServiceContext');
	}
	return context;
};
