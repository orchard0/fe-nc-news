import styles from './Comments.module.css';
import { CommentArea } from './CommentArea';

export const Comments = ({ id }) => {
	console.log(id);
	return (
		<section className={styles.content}>
			<h1 className={styles.title}>Comments</h1>
			<div className={styles.commentBox}></div>
			<div className={styles.commentArea}>
				<CommentArea id={id} />
			</div>
		</section>
	);
};
