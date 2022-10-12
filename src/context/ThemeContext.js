import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"))
        }
    }, [theme])

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;