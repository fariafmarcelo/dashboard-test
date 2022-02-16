import React, { createContext, useState, useContext } from 'react';

import Dark from '../styles/themes/dark';
import Light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void,
    theme: ITheme,
}

interface ITheme {
    title: string,

    colors: {
        primary: string,
        secondary: string,
        tertiary: string,

        white: string,
        black: string,
        gray: string,

        success: string,
        info: string,
        warning: string,
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(Dark);

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(Light);
        } else {
            setTheme(Dark);
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeProvider, useTheme };