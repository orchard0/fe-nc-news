import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import getArticles from './utils';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticles().then((results) => {
			setArticles(results);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

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
