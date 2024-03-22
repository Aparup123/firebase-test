import { useState } from 'react'

import { auth } from './firebase';
import {  signInWithEmailAndPassword} from 'firebase/auth';

export default function Signup(){
    const [userEmail, setUserEmail]=useState("")
    const [userPassword, setUserPassword]=useState("")
    function userSignin(e){
      e.preventDefault();
      console.log(userEmail);
      console.log(userPassword);
      signInWithEmailAndPassword(auth, userEmail, userPassword).then((usr)=>{
        console.log("User signed in");
        console.log(usr.user.email);
      }).catch((e)=>{
        console.log(e);
      })
      setUserEmail("");
      setUserPassword("");
  
    }
  
    return (
      <>
        <h1>Sign in</h1>
        <form onSubmit={userSignin} className='signin-form'>
          <label>Email</label>
          <input name="userEmail" type="email" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>
          <label>Password</label>
          <input name="userPassword" type="password" onChange={(e)=>setUserPassword(e.target.value)} value={userPassword}/>
          <button type='submit' >Sign in</button>
        </form>
      </>
    )
}