import { useEffect, useState } from "react";
import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { }
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {

        const storedData = localStorage.getItem("isUserLoggedIn");

        if (storedData === "1") {
            setLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password) => {

        localStorage.setItem("isUserLoggedIn", "1");
        setLoggedIn(true);
       
    }

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("isUserLoggedIn")
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler

        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;