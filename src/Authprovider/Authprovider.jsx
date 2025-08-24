import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app)

const Authprovider = ({children}) => {
      const [user, setUser] = useState(null)

      const createUser = (email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
      }

       const login = (email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
       }

       const logOut = () =>{
            return signOut(auth)
       }

      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser)
            })
           return () => unSubscribe()
      },[])

      const authInfo = {
           createUser,
           user,
           login,
           logOut
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default Authprovider;