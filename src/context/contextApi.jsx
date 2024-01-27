import { createContext, useState, useEffect } from 'react';

import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = ({ children }) => {
	const [searchResults, setSearchResults] = useState(false);
	const [selectCategories, setSelectCategories] = useState('New');
	const [mobileMenu, setMobileMenu] = useState(false);

	useEffect(() => {
		fetchSelectedCategoryData(selectCategories);
	}, [selectCategories]);

	const fetchSelectedCategoryData = query => {
		fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
			console.log(contents);
			setSearchResults(contents);
		});
	};

	return (
		<Context.Provider
			value={{
				searchResults,
				setSearchResults,
				selectCategories,
				setSelectCategories,
				mobileMenu,
				setMobileMenu,
			}}>
			{children}
		</Context.Provider>
	);
};
