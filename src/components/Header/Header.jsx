import { UserContext } from '../UserContext';
import { useContext, useEffect, useState } from 'react';
import { getTopics } from '../utils';
import styles from './Header.module.css';

const Header = () => {
	const { user } = useContext(UserContext);
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	return (
		<nav className={styles.content}>
			<section className={styles.top}>
				<section className={styles.title}>
					<a href="/">Abdul's News</a>
				</section>
				<section className={styles.username}>{user}</section>
			</section>
			<section className={styles.topics}>
				{topics.map((topic) => {
					const topicName =
						topic.slug.at(0).toUpperCase() + topic.slug.slice(1);

					return (
						<a key={topic.slug} href={`/topic/${topic.slug}`}>
							{topicName}
						</a>
					);
				})}
			</section>
		</nav>
	);
};

export default Header;
