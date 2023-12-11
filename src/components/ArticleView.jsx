import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from './utils';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ArticleView = () => {
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		getArticleById(id)
			.then((res) => {
				setArticle(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Error!</h1>;

	return (
		<Card>
			<Card.Body>
				<Card.Img variant="top" src={article.article_img_url} />
				<Card.Body></Card.Body>
				<Card.Title>{article.title} </Card.Title>
				<p>by {article.author}</p>
				<Button variant="primary">👍</Button>
				<Button disabled={true} variant="secondary">
					{article.votes}
				</Button>
				<p></p>
				<Card.Text align="left">{article.body} </Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ArticleView;
