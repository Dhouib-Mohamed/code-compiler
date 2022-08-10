import {Container} from "react-bootstrap";
import styles from "../styles/css/element.module.css";

export default function Input({content,setContent}) {
    return (
        <Container className={styles.element}>
            <Container  className={styles.name}>
                Input :
            </Container>
            <div className={styles.divider}></div>
            <textarea value={content} onChange={e=>setContent(e.target.value)} className={styles.content+" form-control "+ styles.input} id="floatingTextarea"/>
        </Container>
    )
}