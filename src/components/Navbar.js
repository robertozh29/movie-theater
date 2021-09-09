import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavMenu(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Theater.io</Navbar.Brand>
                    <Navbar className="justify-content-end">
                        <Nav className="me-auto" >
                            <Nav.Link href="/theaters">In Theaters</Nav.Link>
                            <Nav.Link href="/comingsoon">Coming Soon</Nav.Link>
                            <Nav.Link href="/about">about</Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </div>
    );
}


// eslint-disable-next-line
{/* <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
     */}