import { useState } from 'react'

import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Signup(){
    const [userEmail, setUserEmail]=useState("")
    const [userPassword, setUserPassword]=useState("")
    function userSignup(e){
      e.preventDefault();
      console.log(userEmail);
      console.log(userPassword);
      createUserWithEmailAndPassword(auth, userEmail, userPassword).then((usr)=>{
        console.log("User created successfully");
        console.log(usr.user.email);
        const docRef=doc(db, "users", usr.user.email);
        setDoc(docRef,{
            email:usr.user.email,
        }).then(()=>{
            console.log("User added in database successfully");
        }).catch((e)=>{
            console.log(e);
        })
      }).catch((e)=>{
        console.log(e);
      })
      setUserEmail("");
      setUserPassword("");
  
    }
  
    return (
      <>
        <h1>Sign up</h1>
        <form onSubmit={userSignup} className='signup-form'>
          <label>Email</label>
          <input name="userEmail" type="email" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>
          <label>Password</label>
          <input name="userPassword" type="password" onChange={(e)=>setUserPassword(e.target.value)} value={userPassword}/>
          <button type='submit' >Sign up</button>
        </form>
      </>
    )
}