import { useState } from 'react'
import ContextLogin from './ContextLogin'

interface ContextLoginManagerProps {
    children: JSX.Element;
}

function ContextLoginManager({ children }: ContextLoginManagerProps) {
    const [login, setLogin] = useState(false);

    const setLogIn = (username: string, cb: () => void) => {
        if (username === 'juan.123') {
            setLogin(true)
            cb()
        }
    }

    const setLogOut = () => {
        setLogin(false)
    }

    return (
        <ContextLogin.Provider value={{
            isLogin: login,
            logIn: setLogIn,
            logOut: setLogOut,
        }}>
            {children}
        </ContextLogin.Provider>
    );
}

export default ContextLoginManager
