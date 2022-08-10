import {Container} from "react-bootstrap";
import styles from "../styles/css/element.module.css";

export default function Output({content}) {
    return (
        <Container className={styles.element}>
            <Container  className={styles.name}>
                Output :
            </Container>
            <div className={styles.divider}></div>
            <textarea value={content} className={styles.content+" form-control "+styles.output} id="floatingTextarea" readOnly={true}/>
        </Container>
    )

}