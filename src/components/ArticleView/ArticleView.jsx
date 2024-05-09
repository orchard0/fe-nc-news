import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, patchArticle } from '../utils';
import { CommentsArea } from '../Comments/CommentsArea';

import styles from './ArticleView.module.css';

const ArticleView = () => {
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isVoteDone, setIsVoteDone] = useState(false);
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
	if (isError) return <h1>503! Service unavailable!</h1>;

	const dateDisplay = new Date(article.created_at).toLocaleDateString(
		'en-GB',
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}
	);

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>{article.title}</h1>
			<img className={styles.img} src={article.article_img_url} alt="" />
			<section className={styles.info}>
				<p>
					by {article.author} | {dateDisplay} | 💬{' '}
					{article.comment_count}
				</p>
				<p className={styles.voteCount}> 🗳️ {article.votes}</p>
				<button
					className={styles.voteBtn}
					disabled={isVoteDone}
					onClick={() => {
						addVote(1);
					}}>
					👍
				</button>
				<button
					className={styles.voteBtn}
					disabled={isVoteDone}
					onClick={() => {
						addVote(-1);
					}}>
					👎
				</button>
			</section>

			<article className={styles.articleBody}>{article.body}</article>

			<div className={styles.comments}>
				<CommentsArea id={article.article_id} setArticle={setArticle} />
			</div>
		</div>
	);
};

export default ArticleView;
