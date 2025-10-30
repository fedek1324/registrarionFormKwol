import { Link } from "react-router-dom";
import TextInput from "../../TextInput/TextInput.tsx";
import Checkbox from "../../Checkbox/Checkbox.tsx";
import styles from "./Registration.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  confirmPolicy: boolean;
};

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  const requiredMessage = 'Это поле обязательно';

  return (
    <div className={styles.container}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formHead}>Hello</h1>
        <div className={styles.mainContent}>
          <TextInput
            placeholder="Введите почту"
            label="Корпоративный e-mail"
            {...register("email", {
              required: requiredMessage,
              pattern: {
                value: /^[\w.-]+@[\w.-]+\.\w+$/,
                message: 'Укажите строку в формате email'
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          <Checkbox {...register("confirmPolicy", {required: requiredMessage})}>
            <span>
              Я подтверждаю согласие с{" "}
              <Link to="#">политикой конфиденциальности</Link>
            </span>
          </Checkbox>
          {errors.confirmPolicy && <span className="error">{errors.confirmPolicy.message}</span>}

          <button className="primary">Продолжить</button>
        </div>
        <div className={styles.asideContent}>
          <button type="submit" className="secondary">
            Войти
          </button>
          <span className={styles.helpText}>
            Возник вопрос или что-то сломалось?{" "}
            <Link to="#">Вступай в чат и задавай вопрос</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
