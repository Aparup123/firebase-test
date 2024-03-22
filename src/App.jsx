import { useEffect, useState } from 'react'

import './App.css'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Signup from './Signup';
import Signin from './Signin';
import UserProfile from './UserProfile';
import CreateNote from './CreateNote';
import NoteList from './NoteList';

function App() {
  
  const currentUser=auth.currentUser;
  
  const [active, setActive]=useState("App");
  function handleActive(s){
      setActive(s);
  }
 return<>
 <h1>Welcome</h1>
 <button onClick={()=>setActive("Signup")}>Signup</button>
 <button onClick={()=>setActive("Signin")}>Signin</button>
 <button onClick={()=>setActive("UserProfile")}>User profile</button>
 <button onClick={()=>setActive("CreateNote")}>CreateNote</button>
 <button onClick={()=>setActive("NoteList")}>NoteList</button>
 {active=="Signup"&&<Signup/>}
 {active=="Signin"&&<Signin/>}
 {active=="UserProfile"&&<UserProfile currentUser={currentUser}/>}
 {active=="CreateNote"&&<CreateNote currentUser={currentUser}/>}
 {active=="NoteList"&&<NoteList currentUser={currentUser}/>}
 
 </>
}


export default App
