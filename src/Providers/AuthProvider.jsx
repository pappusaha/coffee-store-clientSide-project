import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [users, setUsers]=useState(null)
    const [loading, setLoading]=useState(true)

const createUser=( email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword (auth,email, password)
}
const signUser = (email,password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
 


    const userInfo={
        users,
        loading, 
        createUser, 
        signUser
    }
    return (
        < AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;