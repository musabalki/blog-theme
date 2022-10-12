import { useContext, useEffect, useState } from 'react';
import Header from "./components/Header"
import Instagram from './components/Instagram';
import MainBlog from './components/MainBlog';
import MainBlogFilter from './components/MainBlogFilter';
import Subscribe from './components/Subscribe';
import TobList from './components/TobList';
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext';


function App() {
  const { theme, setTheme, changeTheme } = useContext(ThemeContext)
  return (
    <div className={` ${theme === "dark" ? 'bg-black	' : 'bg-gray-100'} transition-bg`}>
      <Header />
      <TobList />
      <MainBlog />
      <Subscribe />
      <MainBlogFilter />
      <Instagram />
      <Footer />
    </div>

  );
}

export default App;
