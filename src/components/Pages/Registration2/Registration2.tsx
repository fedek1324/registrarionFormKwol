import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLocalStorage } from "../../../hooks/useLocalStorage.ts";

import TextInput from "../../TextInput/TextInput.tsx";
import styles from "./Registration2.module.css";

const formSchema = z.object({
  name: z.string().min(1, "Введите имя"),
  password: z.string().min(6, "Пароль не короче 6 символов"),
});

type FormSchema = z.infer<typeof formSchema>;

const Registration2 = () => {
  const navigate = useNavigate();
  const [email] = useLocalStorage<string>("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log("Submit data", data);

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("usersData") || "[]");

    // Add new user to the array
    const newUser = {
      email: email as string,
      name: data.name,
      password: data.password,
    };
    existingUsers.push(newUser);

    // Save updated users array
    localStorage.setItem("usersData", JSON.stringify(existingUsers));

    // Remove email from localStorage
    localStorage.removeItem("email");

    // Navigate to users data page
    navigate('/usersData');
  };

  return (
    <div className={styles.container}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formHead}>Регистрация</h1>
        <div className={styles.mainContent}>
          <TextInput
            {...register("name")}
            placeholder="Введите имя"
            label="Имя"
            tabIndex={1}
            autoFocus
          />
          {errors.name && (
            <span className="error">{errors.name.message}</span>
          )}

          <TextInput
            {...register("password")}
            type="password"
            placeholder="Введите пароль"
            label="Пароль"
            tabIndex={2}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}

          <button tabIndex={3} type="submit" className="primary">
            Зарегистрироваться
          </button>
        </div>

        <div className={styles.buttonContainer}>
          <button
            tabIndex={4}
            type="button"
            className="secondary"
            onClick={() => navigate("/registration1")}
          >
            Назад
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

export default Registration2;
