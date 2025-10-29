import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Registration from './components/Pages/Registration/Registration';
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
        <Route path="/" element={<Registration />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
