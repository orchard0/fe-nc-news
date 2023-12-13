import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from './utils';
import Comment from './Comment';
import Row from 'react-bootstrap/Row';
import { AddComment } from './AddComment';
import ToastMsg from './ToastMsg';

const Commments = ({ id }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastMsg, setToastMsg] = useState('');

	useEffect(() => {
		getCommentsByArticleId(id)
			.then((fetchedComments) => {
				setComments(fetchedComments);
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
				<ToastMsg
					showToast={showToast}
					setShowToast={setShowToast}
					toastMsg={toastMsg}></ToastMsg>
			</Row>
			<AddComment
				id={id}
				setComments={setComments}
				setShowToast={setShowToast}
				setToastMsg={setToastMsg}></AddComment>
			<Row style={{ justifyContent: 'center' }}>
				{comments.length === 0 ? <p>Be the first to comment!</p> : ''}
				{comments.map((comment) => {
					return (
						<Comment
							key={comment.comment_id}
							comment={comment}
							setComments={setComments}
							setShowToast={setShowToast}
							setToastMsg={setToastMsg}></Comment>
					);
				})}
			</Row>
		</>
	);
};

export default Commments;
