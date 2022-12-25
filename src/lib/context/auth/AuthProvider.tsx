import { createContext, useState, ReactElement } from 'react';

const AuthContext = createContext({});

type Props = {
    children: ReactElement | ReactElement[] | undefined
} 

export const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
} 