import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
 
//A react component wrapping other components to enable the sharing of its functions and states via (useContext hook) 
const AuthContextProvider=(props)=>{

    const [authenticated, setAuthenticated]= useState(false);

    return(
        <AuthContext.Provider value={{ authenticated, setAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;