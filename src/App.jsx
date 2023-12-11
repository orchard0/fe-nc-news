import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx/Header';
import Articles from './components/Articles';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<Header></Header>

			<Routes>
				<Route path="/" element={<Articles></Articles>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
