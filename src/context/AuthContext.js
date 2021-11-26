import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export default function Auth({ children }) {

    const [user, setUser] = useState(true)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
