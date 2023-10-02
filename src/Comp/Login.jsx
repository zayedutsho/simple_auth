import{GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut}from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const[user, setUser]=useState(null)

const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();

const gitProvider= new GithubAuthProvider()


const handleGoogleSignIn=()=>{


signInWithPopup(auth,googleProvider)
.then(result=>{
    const logedUser=result.user;
    console.log(logedUser);
    setUser(logedUser)
})
.catch(error=>{


     console.log('error',error.message)
})

}

const handleGithubLogIn=()=>{

    signInWithPopup(auth,gitProvider)
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

        <div> <button onClick={handleGoogleSignIn}>google</button> 
        <button onClick={handleGithubLogIn}>github</button></div>
         
          
        
          }
            {user && <div>
                <h3>user Name:{user.displayName}</h3>
                <h3>user Email:{user.email}</h3>
                </div>}
        </div>

        
    );
};

export default Login;