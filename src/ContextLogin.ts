import { createContext } from 'react'

const ContextLogin = createContext({
    isLogin: false,
    logIn: (username: any, cb: any) => { },
    logOut: () => { },
})

export default ContextLogin