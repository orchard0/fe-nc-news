import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';
import ArticleView from './components/ArticleView/ArticleView';
import { UserProvider } from './components/UserContext';
import styles from './App.module.css';

function App() {
	return (
		<UserProvider>
			<div className={styles.app}>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Articles></Articles>}></Route>
					<Route
						path="/topic/:topic"
						element={<Articles></Articles>}></Route>
					<Route
						path="/article/:id"
						element={<ArticleView></ArticleView>}></Route>
				</Routes>
			</div>
		</UserProvider>
	);
}

export default App;
