import { createContext, useEffect, useState } from "react";
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../Firebase/Firebase.config"


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

const [user,setUser]= useState(null)
const [loader,setLoader] = useState(true)

const createUser = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const singIn =(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser)
    setLoader(false)

})
return  ()=> unSubscribe()


},[])
const logOut = ()=>{
    return signOut(auth)
}

    
    const authInfo = {user,createUser,singIn,logOut,loader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;