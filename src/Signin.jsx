import { useState } from 'react'

import { auth } from './firebase';
import {  signInWithEmailAndPassword} from 'firebase/auth';

export default function Signup({handleActive, currentUser, msetCurrentUser}){
    const [userEmail, setUserEmail]=useState("")
    const [userPassword, setUserPassword]=useState("")
    
    function userSignin(e){
      e.preventDefault();
      console.log(userEmail);
      console.log(userPassword);
      signInWithEmailAndPassword(auth, userEmail, userPassword).then((usr)=>{
        console.log("User signed in");
        console.log(usr.user.email);
        // localStorage.setItem("currentUser", JSON.stringify(usr.user));
        
        console.log(currentUser);
      handleActive("NoteList");
      }).catch((e)=>{
        console.log(e);
      })
      setUserEmail("");
      setUserPassword("");
      // while(currentUser==null){

      // }
      
      
  
    }
  
    return (
      <>
        
        <form onSubmit={userSignin} className='signin-form auth-form'>
          <h1>Sign in</h1>
          <label>Email</label>
          <input name="userEmail" placeholder='Email' type="email" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>
          <label>Password</label>
          <input name="userPassword" placeholder="Password" type="password" onChange={(e)=>setUserPassword(e.target.value)} value={userPassword}/>
          <button type='submit' className='button-white'>Sign in</button>
          <p>Don't have an account? <a  onClick={()=>{handleActive("Signup")}}>sign up</a></p>
        </form>
      </>
    )
}