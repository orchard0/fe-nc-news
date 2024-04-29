import styles from './Comment.module.css';
import { UserContext } from './../UserContext';
import { useContext } from 'react';
import { deleteComment } from '../utils';

// {
//   "comment_id": 124,
//   "body": "Vitae laudantium molestiae neque ut dicta fuga similique. Sit nesciunt magni sit beatae. Porro recusandae aut exercitationem eligendi voluptas. Dolore eligendi inventore magni voluptatem quia ut ut.",
//   "article_id": 34,
//   "author": "grumpy19",
//   "votes": -1,
//   "created_at": "2020-10-17T22:05:00.000Z"
// }

export const Comment = ({ comment, setComments }) => {
	const { user } = useContext(UserContext);

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

	return (
		<div className={styles.commentArea}>
			<div className={styles.commentInfo}>
				{' '}
				<div className={styles.commentAuthor}>{comment.author}</div>
				<div className={styles.commentDate}>{comment.created_at}</div>
			</div>
			<div className={styles.commentBody}>{comment.body}</div>
			<div className={styles.commentFooter}>
				<div className={styles.commentVotes}>
					🗳️ {comment.votes}
					<button>👍</button>
					<button>👎</button>
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
