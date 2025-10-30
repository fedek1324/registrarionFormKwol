import { Link } from "react-router-dom";
import TextInput from "../../TextInput/TextInput.tsx";
import Checkbox from "../../Checkbox/Checkbox.tsx";
import styles from "./Registration.module.css";


const Registration = () => {
    return (
        <div className={styles.container}>
            <div className="form">
                <h1 className={styles.formHead}>Hello</h1>
                <div className={styles.mainContent}>
                    <TextInput placeholder="Введите почту" label="Корпоративный e-mail" />
                    <Checkbox onChange={() => {}}>
                        <span>Я подтверждаю согласие с <Link to="#">политикой конфиденциальности</Link></span>
                    </Checkbox>
                    <button className="primary">Продолжить</button>
                </div>
                <div className={styles.asideContent}>
                    <button className="secondary">Войти</button>
                    <span className={styles.helpText}>
                        Возник вопрос или что-то сломалось? <Link to="#">Вступай в чат и задавай вопрос</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Registration;