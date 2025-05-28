import React, { createContext, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

 export const AuthContext = createContext(null);

const Authprovider = ({children}) => {

    const [user, setuser ] = useState(null);
    const [loading,setloading] = useState(true)

    const createuser = (email,password) =>
    {
        setloading(true);
        return createUserWithEmailAndPassword (auth,email,password)
    }


    const  signinuser= (email,password) =>
    {
        setloading(true);
        return  signInWithEmailAndPassword(auth,email,password)
    }

    const userinfo = {
        user,
        loading,
        createuser,
        signinuser
    }
    return (
        <div>
            <AuthContext.Provider value = {userinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;