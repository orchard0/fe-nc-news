import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, patchArticle } from './utils';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Commments from './Comments';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToastMsg from './ToastMsg';

const ArticleView = () => {
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isVoteDone, setIsVoteDone] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastMsg, setToastMsg] = useState('');
	const { id } = useParams();

	useEffect(() => {
		getArticleById(id)
			.then((res) => {
				setArticle(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	const showError = () => {
		setToastMsg('Your vote did not register, please try again!');
		setShowToast(true);
	};

	const updateArticle = (value) => {
		setArticle((current) => {
			const { votes, ...rest } = current;
			return { votes: votes + value, ...rest };
		});
	};

	const addVote = (value) => {
		updateArticle(value);
		const data = { inc_votes: value };
		patchArticle(id, data)
			.then(() => {
				setIsVoteDone(true);
			})
			.catch((err) => {
				updateArticle(-value);
				setIsVoteDone(false);
				showError();
			});
	};

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Error!</h1>;

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Img variant="top" src={article.article_img_url} />
					<Card.Body></Card.Body>
					<Card.Title>{article.title} </Card.Title>
					<p>by {article.author}</p>
					<Col>
						<Row
							style={{
								justifyContent: 'center',
							}}>
							<ToastMsg
								showToast={showToast}
								setShowToast={setShowToast}
								toastMsg={toastMsg}></ToastMsg>
						</Row>

						<Button
							disabled={isVoteDone}
							variant="primary"
							onClick={() => {
								addVote(1);
							}}>
							👍
						</Button>
						<Button
							disabled={isVoteDone}
							variant="warning"
							onClick={() => {
								addVote(-1);
							}}>
							👎🏽
						</Button>
						<Button disabled={true} variant="secondary">
							{article.votes}
						</Button>
					</Col>{' '}
					<p></p>
					<Card.Text align="left">{article.body} </Card.Text>
				</Card.Body>
			</Card>{' '}
			<Commments id={id}></Commments>
		</>
	);
};

export default ArticleView;
