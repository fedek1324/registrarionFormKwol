import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';

import TextInput from "../../TextInput/TextInput.tsx";
import Checkbox from "../../Checkbox/Checkbox.tsx";
import styles from "./Registration1.module.css";
import { useEffect, useEffectEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.email('Некорректный email'),
  confirmPolicy: z.literal(true, 'Примите соглашение')
});

type FormSchema = z.infer<typeof formSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => console.log("Submit data", data);

  // с помощью useEffectEvent избавляемся от зависимости setFocus в useEffect
  const focus = useEffectEvent(() => {
    // устанавливаем фокус на первое поле (имя пользователя) после монтирования компонента
    setFocus('email');
  })

  useEffect(() => {
    focus();
  }, [focus]);

  console.log(errors);

  return (
    <div className={styles.container}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formHead}>Регистрация</h1>
        <div className={styles.mainContent}>
          <TextInput
            {...register("email")}
            placeholder="Введите почту"
            label="Корпоративный e-mail"
            tabIndex={1}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          <Checkbox {...register("confirmPolicy")} tabIndex={2}>
            <span>
              Я подтверждаю согласие с{" "}
              <Link to="#">политикой конфиденциальности</Link>
            </span>
          </Checkbox>
          {errors.confirmPolicy && <span className="error">{errors.confirmPolicy.message}</span>}

          <button tabIndex={3} type="submit" className="primary">Продолжить</button>
        </div>
        <div className={styles.asideContent}>
          <button type="button" className="secondary">
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
