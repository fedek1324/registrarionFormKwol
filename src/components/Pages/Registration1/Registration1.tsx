import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

import TextInput from "../../TextInput/TextInput.tsx";
import Checkbox from "../../Checkbox/Checkbox.tsx";
import styles from "./Registration1.module.css";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.email("Некорректный email"),
  confirmPolicy: z.literal(true, "Примите соглашение"),
});

type FormSchema = z.infer<typeof formSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) =>
    console.log("Submit data", data);

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
            autoFocus
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          <Checkbox {...register("confirmPolicy")} tabIndex={2}>
            <span>
              Я подтверждаю согласие с{" "}
              <Link to="#">политикой конфиденциальности</Link>
            </span>
          </Checkbox>
          {errors.confirmPolicy && (
            <span className="error">{errors.confirmPolicy.message}</span>
          )}

          <button tabIndex={3} type="submit" className="primary">
            Продолжить
          </button>
        </div>

        <div className={styles.buttonContainer}>
          <button tabIndex={4} type="button" className="secondary">
            Войти
          </button>
        </div>

        <div className={styles.helpTextContainer}>
          <span className={styles.helpText}>
            Возник вопрос или что-то сломалось?{" "}
          </span>
          <Link to="#" tabIndex={5} className={styles.helpText}>
            Вступай в чат и задавай вопрос
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
