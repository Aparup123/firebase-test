import { useState } from 'react'

import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Signup({handleActive, setCurrentUser}){
    const [userEmail, setUserEmail]=useState("")
    const [userPassword, setUserPassword]=useState("")
    function userSignup(e){
      e.preventDefault();
      console.log(userEmail);
      console.log(userPassword);
      createUserWithEmailAndPassword(auth, userEmail, userPassword).then((usr)=>{
        console.log("User created successfully");
        console.log(usr.user.email);
        // setCurrentUser(usr.user.email);
        localStorage.setItem("currentUser", JSON.stringify(usr.user));
        const docRef=doc(db, "users", usr.user.email);
        setDoc(docRef,{
            email:usr.user.email,
        }).then(()=>{
            console.log("User added in database successfully");
        }).catch((e)=>{
            console.log(e);
        })

        handleActive("NoteList");
      }).catch((e)=>{
        console.log(e);
      })
      setUserEmail("");
      setUserPassword("");
  
    }
  
    return (
      <>
        
        <form onSubmit={userSignup} className='signup-form auth-form'>
        <h1>Sign up</h1>
          <label>Email</label>
          <input name="userEmail" placeholder='Email' type="email" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>
          <label>Password</label>
          <input name="userPassword" placeholder="Password" type="password" onChange={(e)=>setUserPassword(e.target.value)} value={userPassword}/>
          <button type='submit' className='button-white'>Sign up</button>
          <p>Have an account? <a  onClick={()=>{handleActive("Signin")}}>sign in</a></p>
          <p></p>
        </form>
      </>
    )
}