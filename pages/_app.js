import '../styles/css/index.css'
import '../styles/css/global.module.css'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import SSRProvider from 'react-bootstrap/SSRProvider'
import {languages} from "../data/languages";

function MyApp({ Component, pageProps }) {
  return(
      <SSRProvider>
          <div  className={"global_nav"}>
        <Navbar bg="light" expand="md">
          <Container className={" ps-lg-5 ms-lg-5 ps-3 ms-3 "}>
            <Navbar.Brand href="#home"><span className="p-2 mb-2 rounded-3 bg-primary text-white">Code</span>  Compiler</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Online IDE" id="basic-nav-dropdown">
                  {languages.map((language)=>{
                    return(
                        <NavDropdown.Item key ={language.name} href={'/compile/'+language.name}>Online {language.name} Compiler</NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          </div>
          <div className={"all"}>
              <Component {...pageProps} />
          </div>
      </SSRProvider>
  );
}

export default MyApp
