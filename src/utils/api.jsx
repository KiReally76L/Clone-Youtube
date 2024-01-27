import axios from 'axios';

const URL_BASE = 'https://youtube138.p.rapidapi.com';
const REACT_APP_YOUTUBE_API_KEY = 'key';

const options = {
	params: {
		hl: 'en',
		gl: 'US',
	},
	headers: {
		'X-RapidAPI-Key': REACT_APP_YOUTUBE_API_KEY,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
	},
};

export const fetchDataFromApi = async url => {
	const { data } = await axios.get(`${URL_BASE}/${url}`, options);
	return data;
};
