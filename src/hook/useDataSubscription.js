import { useEffect, useState } from 'react';
import { dataCardCountry } from '../constants';
import { sharingDescriptions } from '../services';
import { handleScrollDown } from '../utils';

const useDataSubscription = () => {
	const [dataResponse, setDataResponse] = useState([]);

	const subscription$ = sharingDescriptions.getSubject();

	useEffect(() => {
		subscription$.subscribe(data => {
			const setData = dataCardCountry.filter(
				element => element.id === data.country.id
			);
			setData.length &&
				setTimeout(() => {
					handleScrollDown(540);
				}, 300);
			return setDataResponse(setData);
		});
	}, [subscription$]);

	return [dataResponse];
};

export default useDataSubscription;
