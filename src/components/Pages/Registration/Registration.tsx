import Form from "../../Form/index.ts";
import Button from "../../Button/index.ts";
import H1 from "../../H1/index.ts";
import TextInput from "../../TextInput/TextInput.tsx";

import styles from "./Registration.module.css";


const Registration = () => {
    return (
        <div className={styles.container}>
            <Form>
                <H1>Hello</H1>
                <TextInput placeholder="Введите почту" />
                <Button>Продолжить</Button>
            </Form>
        </div>
    )
}

export default Registration;