import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme:dark)"
        ).matches;
    const storedDarkMode = localStorage.getItem("darkTheme");
    if (storedDarkMode === null) {
        return prefersDarkMode;
    }
    return storedDarkMode === "true";
};

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [search, setSearch] = useState("dog");
    const toggleDarkTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        const body = document.querySelector("body");
        body.classList.toggle("dark-theme", newTheme);
        localStorage.setItem("darkTheme", newTheme);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.toggle("dark-theme", isDarkTheme);
    }, []);

    return (
        <AppContext.Provider
            value={{ isDarkTheme, toggleDarkTheme, search, setSearch }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
