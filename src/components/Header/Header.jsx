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

	// return (
	// 	<Navbar
	// 		expand="lg"
	// 		className="bg-body-tertiary"
	// 		bg="light"
	// 		data-bs-theme="light">
	// 		<Container>
	// 			<Navbar.Brand href="/">NC News</Navbar.Brand>
	// 			<Navbar.Toggle aria-controls="basic-navbar-nav" />
	// 			<Navbar.Collapse id="basic-navbar-nav">
	// 				<Nav className="me-auto">
	// 					{topics.map((topic) => {
	// 						return (
	// 							<Nav.Link
	// 								key={topic.slug}
	// 								href={`/topics/${topic.slug}`}>
	// 								{topic.slug.charAt(0).toUpperCase() +
	// 									topic.slug.slice(1)}
	// 							</Nav.Link>
	// 						);
	// 					})}
	// 				</Nav>
	// 				<Nav>
	// 					<Nav.Link href="#">{user}</Nav.Link>
	// 				</Nav>
	// 			</Navbar.Collapse>
	// 		</Container>
	// 	</Navbar>
	// );
};

export default Header;
