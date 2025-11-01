import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLocalStorage } from "../../../hooks/useLocalStorage.ts";

import TextInput from "../../TextInput/TextInput.tsx";
import Checkbox from "../../Checkbox/Checkbox.tsx";
import styles from "./Registration1.module.css";

const formSchema = z.object({
  email: z.email("Некорректный email"),
  confirmPolicy: z.literal(true, "Примите соглашение"),
});

type FormSchema = z.infer<typeof formSchema>;

const Registration = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useLocalStorage<string>("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email || "",
      confirmPolicy: email ? true : undefined,
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log("Submit data", data);
    setEmail(data.email);
    navigate("/registration2");
  };

  return (
    <div className={styles.container}>
      <form className="form-center" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formHead + " pb-[100"}>Регистрация</h1>
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

          <div className={styles.confirmContainer}>
            <Checkbox {...register("confirmPolicy")} tabIndex={2}>
              <span>
                Я подтверждаю согласие с{" "}
                <Link to="#">политикой конфиденциальности</Link>
              </span>
            </Checkbox>
            {errors.confirmPolicy && (
              <span className="error">{errors.confirmPolicy.message}</span>
            )}
          </div>

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
