import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import getArticles from './utils';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getArticles(setArticles, setIsLoading);
	}, []);

	return (
		<>
			{isLoading ? <h1>Loading articles...</h1> : ''}
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
