import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from './utils';
import Comment from './Comment';
import Row from 'react-bootstrap/Row';

const Commments = ({ id }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getCommentsByArticleId(id)
			.then((res) => {
				setComments(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Error!</h1>;

	return (
		<>
			<h1>Comments</h1>
			<Row style={{ justifyContent: 'center' }}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment.comment_id}
							comment={comment}></Comment>
					);
				})}
			</Row>
		</>
	);
};

export default Commments;
