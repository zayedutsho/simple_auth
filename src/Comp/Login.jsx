import{GoogleAuthProvider, getAuth, signInWithPopup, signOut}from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const[user, setUser]=useState(null)

const auth=getAuth(app);
const provider= new GoogleAuthProvider();


const handleGoogleSignIn=()=>{


signInWithPopup(auth,provider)
.then(result=>{
    const logedUser=result.user;
    console.log(logedUser);
    setUser(logedUser)
})
.catch(error=>{


     console.log('error',error.message)
})

}

const handleSignOut =()=>{

  signOut(auth)
  .then(result=>{

      setUser(null)
      console.log(result)

  })
  .catch(error=>{


    console.log('error',error.message)
})

}

    return (
        <div>
          {

            
        user ?
        <button onClick={handleSignOut}>SignOut</button>:
          <button onClick={handleGoogleSignIn}>google</button> 
          
        
          }
            {user && <div>
                <h3>user Name:{user.displayName}</h3>
                <h3>user Email:{user.email}</h3>
                </div>}
        </div>

        
    );
};

export default Login;