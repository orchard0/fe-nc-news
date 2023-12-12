import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Headers';
import Articles from './components/Articles';

import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleView from './components/ArticleView';
import { UserProvider } from './components/UserContext';

function App() {
	return (
		<UserProvider>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Articles></Articles>}></Route>
				<Route
					path="/article/:id"
					element={<ArticleView></ArticleView>}></Route>
			</Routes>
		</UserProvider>
	);
}

export default App;
