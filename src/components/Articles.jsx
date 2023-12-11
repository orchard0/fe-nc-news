import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';

const Articles = () => {
	const [articles, setArticles] = useState([]);

	const api = axios.create({
		baseURL: 'https://nc-news-wbhn.onrender.com/api',
	});

	const getArticles = async () => {
		try {
			const results = await api.get('/articles');
			setArticles(results.data.articles);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<>
			{articles.map((article) => {
				return (
					<ArticleCard
						key={article.article_id}
						article={article}></ArticleCard>
				);
			})}
		</>
	);
};

export default Articles;
