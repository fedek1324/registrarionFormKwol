import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

import Registration1 from './components/Pages/Registration1/Registration1';
import Registration2 from './components/Pages/Registration2/Registration2';
import UsersData from './components/Pages/UsersData/UsersData';
import kwolLogo from './assets/kwol.svg';
import menuIcon from './assets/menu.svg';
import notification from './assets/notification.svg';

function App() {

   return (
    <BrowserRouter>
      <nav className='flex items-center justify-center md:px-36 py-4 bg-white shadow-md md:justify-between'>
        {/* Logo - center on mobile, left on desktop */}
        <div>
          <Link to="/">
            <img src={kwolLogo} alt="KWOL logo" className='w-[115px] h-[40px]' />
          </Link>
        </div>

        {/* Icons - hidden on mobile, visible on desktop */}
        <div className='hidden md:flex items-center gap-4'>
          {/* Notification Icon */}
          <button>
            <img src={notification} alt="notifications icon" className='h-8' />
          </button>

          {/* Menu Icon */}
          <button>
            <img src={menuIcon} alt="menu icon" className='h-8' />
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
