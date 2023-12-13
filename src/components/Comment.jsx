import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { deleteComment } from './utils';

function Comment({ comment, setComments, setShowToast, setToastMsg }) {
	const { user } = useContext(UserContext);

	const dateDisplay = new Date(comment.created_at).toLocaleDateString(
		'en-GB',
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}
	);

	const showError = () => {
		setToastMsg('Your comment was not deleted! Please try again.');
		setShowToast(true);
	};

	const handleDelete = () => {
		let index;
		setComments((currentComments) => {
			index = currentComments.findIndex((item) => {
				return item.comment_id === comment.comment_id;
			});
			return currentComments.toSpliced(index, 1);
		});

		deleteComment(comment.comment_id).catch((err) => {
			setComments((currentComments) => {
				return currentComments.toSpliced(index, 0, comment);
			});
			showError();
		});
	};

	return (
		<>
			<Card style={{ width: '25rem' }}>
				<Stack direction="horizontal">
					{comment.author === user ? (
						<Button variant="light" onClick={handleDelete}>
							❌
						</Button>
					) : (
						''
					)}
				</Stack>
				<Card.Body>
					<blockquote className="blockquote mb-0">
						<p>{comment.body}</p>
						<footer className="blockquote-footer">
							{comment.author} | {dateDisplay}
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
