import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Comment({ comment }) {
	return (
		<>
			<Card style={{ width: '25rem' }}>
				{/* <Card.Header>Quote</Card.Header> */}
				<Card.Body>
					<blockquote className="blockquote mb-0">
						<p>{comment.body}</p>
						<footer className="blockquote-footer">
							{comment.author}
						</footer>
					</blockquote>
				</Card.Body>
				<Col>
					<Button variant="primary">👍</Button>
					<Button variant="warning">👎🏽</Button>
					<Button disabled={true} variant="secondary">
						{comment.votes}
					</Button>
				</Col>
			</Card>
		</>
	);
}

export default Comment;
