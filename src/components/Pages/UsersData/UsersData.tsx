import { Link } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage.ts";
import styles from "./UsersData.module.css";

interface User {
  email: string;
  name: string;
  password: string;
}

const UsersData = () => {
  const [users, setUsers] = useLocalStorage<User[]>("usersData");

  const usersList = users || [];

  const handleDeleteUser = (index: number) => {
    const updatedUsers = usersList.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Список пользователей</h1>

        {usersList.length === 0 ? (
          <div className={styles.emptyState}>
            <span>Пользователи не найдены</span>
          </div>
        ) : (
          <div className={styles.usersList}>
            {usersList.map((user, index) => (
              <div key={index} className={styles.userCard}>
                <div className={styles.userInfo}>
                  <div className={styles.userName}>{user.name}</div>
                  <div className={styles.userEmail}>{user.email}</div>
                </div>
                <button
                  className={`${styles.deleteButton} secondary`}
                  onClick={() => handleDeleteUser(index)}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        )}

        <div className={styles.buttonContainer}>
          <Link to="/registration1">
            <button className="primary">Добавить пользователя</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsersData;
