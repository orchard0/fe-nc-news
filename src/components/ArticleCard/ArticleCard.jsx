import styles from './ArticleCard.module.css';

const ArticleCard = ({ article }) => {
	return (
		<section
			className={styles.content}
			onClick={() => {
				location.href = '/article/' + article.article_id;
			}}>
			<img className={styles.img} src={article.article_img_url} alt="" />
			<div className={styles.info}>
				{' '}
				<a
					className={styles.title}
					href={'/article/' + article.article_id}>
					{article.title}
				</a>
				<div className={styles.author}>
					<div className={styles.heroImg}></div>
					<p className={styles.authorName}>{article.author}</p>
				</div>
			</div>
		</section>
	);
};

export default ArticleCard;
