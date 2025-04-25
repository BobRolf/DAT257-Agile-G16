import { createContext, useContext, useState, useEffect, ReactNode } from "react";


interface ThemeContextType {
    isDark: boolean
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};


interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light");
        document.body.setAttribute("data-bs-theme", isDark ? "dark" : "light");
    }, [isDark]);

   
    const toggleTheme = () => {
        setIsDark((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
