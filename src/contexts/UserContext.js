import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] =   useState({displayName : "Al Amin"});
    const createUser = (email,password)=>
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email,password)=>
    {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const appInfo = {user, createUser, loginUser};
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default UserContext;