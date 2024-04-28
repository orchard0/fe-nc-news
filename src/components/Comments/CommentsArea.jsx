import styles from './CommentsArea.module.css';
import { Comments } from './Comments';
import { CommentBox } from './CommentBox';

export const CommentsArea = ({ id }) => {
	console.log(id);
	return (
		<section className={styles.content}>
			<h1 className={styles.title}>Comments</h1>
			<div className={styles.commentBox}>
				<CommentBox></CommentBox>
			</div>
			<div className={styles.commentArea}>
				<Comments id={id} />
			</div>
		</section>
	);
};
