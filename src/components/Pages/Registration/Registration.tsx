import Form from "../../Form/index.ts";
import Button from "../../Button/index.ts";
import H1 from "../../H1/index.ts";
import TextInput from "../../TextInput/TextInput.tsx";

import styles from "./Registration.module.css";
import Checkbox from "../../Checkbox/Checkbox.tsx";
import Span from "../../Span/index.ts";
import ALink from "../../ALink/ALink.tsx";


const Registration = () => {
    return (
        <div className={styles.container}>
            <Form>
                <H1 className={styles.formHead}>Hello</H1>
                <div className={styles.mainContent}>
                    <TextInput placeholder="Введите почту" label="Корпоративный e-mail" />
                    <Checkbox onChange={() => {}}><Span>Я подтверждаю согласие с <ALink to={"#"}>политикой конфиденциальности</ALink></Span></Checkbox>
                    <Button variant="primary">Продолжить</Button>
                </div>
                <div className={styles.asideContent}>
                    <Button variant="secondary">Войти</Button>
                    <Span className={styles.helpText}>Возник вопрос или что-то сломалось? <ALink to="#">Вступай в чат и задавай вопрос</ALink></Span>
                </div>
            </Form>
        </div>
    )
}

export default Registration;