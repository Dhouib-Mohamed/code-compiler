import {Button, Container, Nav, NavDropdown} from "react-bootstrap";
import styles from "../styles/css/Options.module.css"
import {languages} from '../data/languages'


export default function Options({ language,compile}) {
    let data = languages.find((element)=>element.name===language)
    return (
        <Container className={styles.container}>
            <Nav className={styles.nav}>
                <span className={styles.extention+" bg-secondary"}> index{data.extention}</span>
                <span className={styles.dropdown}>
                    <NavDropdown title={language} id="nav-dropdown" className={styles.content}>
                    {languages.map((language)=>{
                        return(
                            <NavDropdown.Item key ={language.name} href={language.name}>{language.name}</NavDropdown.Item>
                        )
                    })}
                </NavDropdown>
                </span>
                <span> <Button className={styles.b} onClick={()=>{compile()}} variant="primary">Compile</Button></span>
            </Nav>
        </Container>
    );

}