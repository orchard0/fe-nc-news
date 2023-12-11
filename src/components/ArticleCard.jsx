import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ArticleCard = ({ article }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Card.Text>by {article.author}</Card.Text>
				<Button
					variant="primary"
					href={'/article/' + article.article_id}>
					View
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ArticleCard;
