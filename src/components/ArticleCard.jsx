import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ArticleCard = ({ article }) => {
	return (
		<Card>
			{/* <Card.Header>{article.created_at}</Card.Header> */}
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Card.Text>by {article.author}</Card.Text>
				<Button variant="primary">View</Button>
			</Card.Body>
		</Card>
	);
};

export default ArticleCard;
