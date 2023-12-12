import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { postComment } from './utils';
import { useState } from 'react';

export const AddComment = ({ setComments, id, setShowToast, setToastMsg }) => {
	const [newComment, setNewComment] = useState();
	const [isLoading, setIsLoading] = useState();
	const [btnMsg, setBtnMsg] = useState('Post');

	const showError = (msg) => {
		setToastMsg('Your comment was not posted! Pleas try again.');
		setShowToast(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const commentBeingPosted = newComment;
		if (commentBeingPosted === '') {
			return;
		}
		const body = { username: 'cooljmessy', body: newComment };
		const addComment = {
			body: newComment,
			author: 'cooljmessy',
			article_id: id,
			comment_id: crypto.randomUUID(),
			created_at: Date(),
			votes: 0,
		};
		setIsLoading(true);
		setBtnMsg('Posting...');

		setNewComment('');
		setComments((currentComments) => {
			return [addComment, ...currentComments];
		});
		postComment(id, body)
			.then(() => {
				setIsLoading(false);
				setShowToast(false);
				setBtnMsg('Post');
			})
			.catch((err) => {
				setComments((currentComments) => {
					const [latest, ...rest] = currentComments;
					return [...rest];
				});
				showError();
				setNewComment(commentBeingPosted);
				setIsLoading(false);
				setBtnMsg('Try again...');
			});
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<FloatingLabel
					controlId="floatingInput"
					label="Add a comment"
					className="mb-3">
					<Form.Control
						// as="textarea"
						disabled={isLoading}
						value={newComment}
						placeholder=""
						onChange={(e) => setNewComment(e.target.value)}
					/>
					<Button
						size="lg"
						disabled={isLoading}
						variant="primary"
						onClick={handleSubmit}>
						{btnMsg}
					</Button>
				</FloatingLabel>{' '}
			</Form>
		</>
	);
};
