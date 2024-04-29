import { Comment } from './Comment';

export const Comments = ({ comments, setComments }) => {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment
						key={comment.comment_id}
						comment={comment}
						setComments={setComments}></Comment>
				);
			})}
		</div>
	);
};
