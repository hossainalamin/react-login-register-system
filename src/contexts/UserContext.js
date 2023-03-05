import React, { createContext } from 'react';
const AuthContext = createContext();
const UserContext = ({children}) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};
export default UserContext;