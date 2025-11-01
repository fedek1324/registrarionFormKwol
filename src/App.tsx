import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

import Registration1 from './components/Pages/Registration1/Registration1';
import Registration2 from './components/Pages/Registration2/Registration2';
import UsersData from './components/Pages/UsersData/UsersData';
import kwolLogo from './assets/kwol.svg';
import menuIcon from './assets/menu.svg';
import notification from './assets/notification.svg';

import styles from './App.module.css';

function App() {

   return (
    <BrowserRouter>
      <nav className={styles.nav}>
        {/* Logo - center on mobile, left on desktop */}
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={kwolLogo} alt="KWOL logo" className={styles.logo} />
          </Link>
        </div>

        {/* Icons - hidden on mobile, visible on desktop */}
        <div className={styles.iconsContainer}>
          {/* Notification Icon */}
          <button type='button' className={styles.navButton}>
            <img src={notification} alt="notifications icon" className={styles.icon} />
          </button>

          {/* Menu Icon */}
          <button type='button' className={styles.navButton}>
            <img src={menuIcon} alt="menu icon" className={styles.icon} />
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/registration1" replace />} />
        <Route path="/registration1" element={<Registration1 />} />
        <Route path="/registration2" element={<Registration2 />} />
        <Route path="/usersData" element={<UsersData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
