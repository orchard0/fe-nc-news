import styles from './Comment.module.css';
import { UserContext } from './../UserContext';
import { useContext } from 'react';

// {
//   "comment_id": 124,
//   "body": "Vitae laudantium molestiae neque ut dicta fuga similique. Sit nesciunt magni sit beatae. Porro recusandae aut exercitationem eligendi voluptas. Dolore eligendi inventore magni voluptatem quia ut ut.",
//   "article_id": 34,
//   "author": "grumpy19",
//   "votes": -1,
//   "created_at": "2020-10-17T22:05:00.000Z"
// }

export const Comment = ({ comment }) => {
	const { user } = useContext(UserContext);
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
					<div className={styles.commentDelete}> Delete</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};
