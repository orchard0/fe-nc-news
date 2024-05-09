import styles from './Comment.module.css';
import { UserContext } from './../UserContext';
import { useContext, useState } from 'react';
import { deleteComment, patchComment } from '../utils';

export const Comment = ({ comment, setComments }) => {
	const { user } = useContext(UserContext);
	const [isVoteDone, setIsVoteDone] = useState(false);

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
		});
	};

	const updateComment = (value) => {
		comment.votes += value;
	};

	const addVote = (value) => {
		updateComment(value);
		const data = { inc_votes: value };
		patchComment(comment.comment_id, data)
			.then(() => {
				setIsVoteDone(true);
			})
			.catch((err) => {
				updateComment(-value);
				setIsVoteDone(false);
			});
	};

	const dateDisplay = new Date(comment.created_at).toLocaleDateString(
		'en-GB',
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}
	);

	return (
		<div className={styles.commentArea}>
			<div className={styles.commentInfo}>
				{' '}
				<div className={styles.commentAuthor}>{comment.author}</div>
				<div className={styles.commentDate}>{dateDisplay}</div>
			</div>
			<div className={styles.commentBody}>{comment.body}</div>
			<div className={styles.commentFooter}>
				<div className={styles.commentVotes}>
					🗳️ {comment.votes}
					<button
						disabled={isVoteDone}
						onClick={() => {
							addVote(1);
						}}>
						👍
					</button>
					<button
						disabled={isVoteDone}
						onClick={() => {
							addVote(-1);
						}}>
						👎
					</button>
				</div>
				{comment.author == user ? (
					<button onClick={handleDelete}>Delete</button>
				) : (
					''
				)}
			</div>
		</div>
	);
};
