import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] =   useState({});
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
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
    const singInWithGoogle =()=>{
        return signInWithPopup(auth, provider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        };
    },[]);
    const appInfo = {user,loading, createUser, loginUser, signOutUser, singInWithGoogle};
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default UserContext;