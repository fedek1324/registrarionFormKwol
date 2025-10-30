import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./UsersData.module.css";

interface User {
  email: string;
  name: string;
  password: string;
}

const UsersData = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usersData") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleDeleteUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("usersData", JSON.stringify(updatedUsers));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Список пользователей</h1>

        {users.length === 0 ? (
          <div className={styles.emptyState}>
            <span>Пользователи не найдены</span>
          </div>
        ) : (
          <div className={styles.usersList}>
            {users.map((user, index) => (
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
