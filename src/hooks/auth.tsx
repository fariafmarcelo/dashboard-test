import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean,
    singIn(email: string, password: string): void,
    singOut(): void,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-dashboard:logged');

        return !!isLogged;
    });

    const singIn = (email: string, password: string) => {
        if (email === 'marcelo.faria@email.com' && password === '123') {
            localStorage.setItem('@minha-dashboard:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuário inválidos!');
        }
    }

    const singOut = () => {
        localStorage.removeItem('@minha-dashboard:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, singIn, singOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };