import { AppContext } from './context/contextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Feed, SearchResult, VideoDetails } from './components/index';

function App() {
	return (
		<AppContext>
			<BrowserRouter>
				<div className='flex flex-col h-full'>
					<Header />
					<Routes>
						<Route path='/' exact element={<Feed />} />
						<Route path='/searchResult/:searchQuery' element={<SearchResult />} />
						<Route path='/video/:id' element={<VideoDetails />} />
					</Routes>
				</div>
			</BrowserRouter>
		</AppContext>
	);
}

export default App;
