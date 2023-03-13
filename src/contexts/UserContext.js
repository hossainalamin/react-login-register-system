import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
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
    const signOutUser = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        };
    },[]);
    const appInfo = {user, createUser, loginUser, signOutUser};
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default UserContext;