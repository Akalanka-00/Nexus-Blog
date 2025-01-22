'use client';

import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';

// Define the type for the theme state
type Theme = 'light' | 'dark';

// Define the type for the context value (theme and toggle function)
interface ThemeContextType {
    theme: Theme;
    toggle: () => void;
}

// Default context value (to prevent `undefined` issues)
const defaultContextValue: ThemeContextType = {
    theme: 'light',
    toggle: () => {},  // No-op function as placeholder
};

// Create the context with a default value of 'light' and type ThemeContextType
export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Helper function to get the theme from localStorage
const getFromLocalStorage = (): Theme => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value === 'dark' ? 'dark' : 'light';
    }
    return 'light'; // Default to 'light' if not in a browser environment
};

// Define the type for the props of the ThemeContextProvider component
interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => getFromLocalStorage());

    const toggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Optional: Custom hook for easy access to the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};
