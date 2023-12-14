import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from './UserContext';
import { useContext, useEffect, useState } from 'react';
import { getTopics } from './utils';

const Header = () => {
	const { user } = useContext(UserContext);
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
			bg="light"
			data-bs-theme="light">
			<Container>
				<Navbar.Brand href="/">NC News</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{topics.map((topic) => {
							return (
								<Nav.Link
									key={topic.slug}
									href={`/topics/${topic.slug}`}>
									{topic.slug.charAt(0).toUpperCase() +
										topic.slug.slice(1)}
								</Nav.Link>
							);
						})}
					</Nav>
					<Nav>
						<Nav.Link href="#">{user}</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
