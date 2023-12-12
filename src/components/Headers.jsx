import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from './UserContext';
import { useContext } from 'react';

const Header = () => {
	const { user } = useContext(UserContext);
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
			bg="light"
			data-bs-theme="light">
			<Container>
				<Navbar.Brand href="#home">NC News</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
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
