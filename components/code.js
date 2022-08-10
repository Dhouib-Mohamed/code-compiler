import {Container} from "react-bootstrap";
import styles from '../styles/css/element.module.css'

export default function Code({content,setContent}) {
    return (
        <Container className={styles.element}>
            <Container  className={styles.name}>
                Code :
            </Container>
            <div className={styles.divider}></div>
            <textarea value={content} onChange={e=>setContent(e.target.value)} className={styles.content+" form-control "+styles.code} id="floatingTextarea"/>
        </Container>
    )
}