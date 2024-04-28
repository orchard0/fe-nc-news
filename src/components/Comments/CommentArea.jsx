import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils';
import { Comment } from './Comment';

export const CommentArea = ({ id }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentsByArticleId(id)
			.then((fetchedComments) => {
				setComments(fetchedComments);
				// setIsLoading(false);
			})
			.catch((err) => {
				// setIsLoading(false);
				// setIsError(true);
			});
	}, []);

	return (
		<div>
			{comments.map((comment) => {
				console.log(comment);
				return (
					<Comment
						key={comment.comment_id}
						comment={comment}></Comment>
				);
			})}
		</div>
	);
};
