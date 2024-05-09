import styles from './CommentsArea.module.css';
import { Comments } from './Comments';
import { CommentBox } from './CommentBox';
import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils';

export const CommentsArea = ({ id, setArticle }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentsByArticleId(id)
			.then((fetchedComments) => {
				setComments(fetchedComments);
			})
			.catch((err) => {});
	}, []);

	return (
		<section className={styles.content}>
			<h1 className={styles.title}>Comments</h1>
			<div className={styles.commentBox}>
				<CommentBox
					setComments={setComments}
					id={id}
					setArticle={setArticle}></CommentBox>
			</div>
			<div className={styles.commentArea}>
				<Comments comments={comments} setComments={setComments} />
			</div>
		</section>
	);
};
