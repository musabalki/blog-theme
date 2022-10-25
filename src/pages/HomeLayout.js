import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from '../context/ThemeContext';

function HomeLayout() {
    const { theme} = useContext(ThemeContext)

    return (
        <div className={` ${theme === "dark" ? 'bg-stone-700 dark-bg' : 'bg-gray-100'} transition-bg`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default HomeLayout;