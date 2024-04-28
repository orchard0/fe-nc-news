import React from 'react';
import styles from './CommentBox.module.css';
export const CommentBox = () => {
	return (
		<div className={styles.main}>
			<textarea name="" className={styles.commentBox}></textarea>
			<button className={styles.submitBtn}>Submit</button>
		</div>
	);
};
