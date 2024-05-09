import { useContext, useState } from 'react';
import styles from './CommentBox.module.css';
import { postComment } from '../utils';
import { UserContext } from '../UserContext';

export const CommentBox = ({ id, setComments, setArticle }) => {
	const { user } = useContext(UserContext);
	const [newComment, setNewComment] = useState();
	const [btnText, setBtnText] = useState('Post');

	const handleSubmit = (e) => {
		e.preventDefault();
		const optimisticUpdates = () => {
			setComments((currentComments) => {
				return [addComment, ...currentComments];
			});

			setArticle((current) => {
				const { comment_count, ...rest } = current;
				return {
					comment_count: Number(comment_count) + 1,
					...rest,
				};
			});
		};

		const revertOptimisticUpdates = () => {
			setComments((currentComments) => {
				const [latest, ...rest] = currentComments;
				return [...rest];
			});
			setArticle((current) => {
				const { comment_count, ...rest } = current;
				return {
					comment_count: comment_count - 1,
					...rest,
				};
			});
		};

		const commentBeingPosted = newComment;
		if (commentBeingPosted === '') {
			return;
		}
		const body = { username: user, body: newComment };
		const addComment = {
			body: newComment,
			author: user,
			article_id: id,
			comment_id: crypto.randomUUID(),
			created_at: Date(),
			votes: 0,
		};

		setNewComment('');
		optimisticUpdates();
		postComment(id, body)
			.then(() => {
				console.log('success');
				setBtnText('Comment posted!');
				setNewComment('');
				setTimeout(() => {
					setBtnText('Post');
				}, 1000);
			})
			.catch((err) => {
				revertOptimisticUpdates();
				setNewComment(commentBeingPosted);
				setBtnText('Try again...');
			});
	};

	return (
		<div className={styles.main}>
			<textarea
				value={newComment}
				className={`${styles.commentBox}`}
				onChange={(e) => {
					setNewComment(e.target.value);
				}}></textarea>
			<button className={`${styles.submitBtn}`} onClick={handleSubmit}>
				{btnText}
			</button>
		</div>
	);
};
