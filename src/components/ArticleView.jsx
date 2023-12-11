import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from './utils';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Commments from './Comments';
import Col from 'react-bootstrap/Col';

const ArticleView = () => {
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const { id } = useParams();

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
		<>
			{' '}
			<Card>
				<Card.Body>
					<Card.Img variant="top" src={article.article_img_url} />
					<Card.Body></Card.Body>
					<Card.Title>{article.title} </Card.Title>
					<p>by {article.author}</p>
					<Col>
						<Button variant="primary">👍</Button>
						<Button variant="warning">👎🏽</Button>
						<Button disabled={true} variant="secondary">
							{article.votes}
						</Button>
					</Col>{' '}
					<p></p>
					<Card.Text align="left">{article.body} </Card.Text>
				</Card.Body>
			</Card>{' '}
			<Commments id={id}></Commments>
		</>
	);
};

export default ArticleView;
