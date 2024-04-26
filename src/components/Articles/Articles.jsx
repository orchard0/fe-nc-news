import { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { getArticles } from '../utils';
import { useParams } from 'react-router-dom';

import styles from './Articles.module.css';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const { topic } = useParams();

	useEffect(() => {
		getArticles(topic)
			.then((results) => {
				console.log(results);
				setArticles(results);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>503: Service unavailable!</h1>;

	return (
		<main className={styles.content}>
			{articles.map((article) => {
				return (
					<ArticleCard
						key={article.article_id}
						article={article}></ArticleCard>
				);
			})}
		</main>
	);
};

export default Articles;
