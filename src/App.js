import { useContext } from 'react';
import Header from "./components/Header"
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext';
import { Routes, useRoutes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import routes from './routes';

import HomeLayout from "./pages/HomeLayout"

function App() {
  const { theme, setTheme, changeTheme } = useContext(ThemeContext)
  return useRoutes(routes);

  return (
    <div className={` ${theme === "dark" ? 'bg-stone-800 dark-bg' : 'bg-gray-100'} transition-bg`}>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
