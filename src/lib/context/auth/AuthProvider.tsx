import { createContext, useState, ReactElement } from 'react';
import { AuthUser } from '../../interfaces/auth/authUser';

type DefaultValue = {
    auth: AuthUser,
    setAuth: (auth: AuthUser) => void
}

const AuthContext = createContext<DefaultValue>({
    auth: { accessToken: '', user: { username: '', email: '', rol: '' } },
    setAuth: () => {}
});

type Props = {
    children: ReactElement | ReactElement[] | undefined
}

export const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState<AuthUser>({ accessToken: '', user: { username: '', email: '', rol: '' }});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;