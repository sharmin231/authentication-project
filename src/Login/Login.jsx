import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

const Login = () => {

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);


    const [user,setUser]=useState(null)
    const handleGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setUser(loggedUser)
          })
          .catch((error) => {
           console.log(error)
          });
    }

    const handleGithubLogIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
        const loggedUser = result.user
        console.log(loggedUser)
        setUser(loggedUser)
        })
        .catch(error=>{
            console.log(error)
        })

    }

    const handleLogOut = ()=>{
        console.log('button kaj korce')
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
           {
            user? <button onClick={handleLogOut} className="btn btn-error">Log Out</button>:
            <div>
                <button onClick={handleGoogle} className="btn btn-primary">Google login </button>
                <button onClick={handleGithubLogIn}>Github Login</button>
            </div>
           }
            {/* <h4>user: {user?.displayName}</h4> */}
            {
                user && <div><h1>user: {user.displayName}</h1>
                <h4>email: {user.email}</h4>
                <img src={user.photoURL } alt="" />
                </div>
                
            }
        </div>
    );
};
export default Login;