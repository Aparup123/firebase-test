import { useEffect, useState } from 'react'

import './App.css'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Signup from './Signup';
import Signin from './Signin';
import UserProfile from './UserProfile';
import CreateNote from './CreateNote';
import NoteList from './NoteList';
import Navbar from './Navbar';

function App() {
  const[currentUser, setCurrentUser]=useState(auth.currentUser);
  // var user=auth.currentUser;
  // onAuthStateChanged(auth, (usr)=>{
  //   setCurrentUser(usr);
  // });
  // setCurrentUser(user);

  function msetCurrentUser(u){
    setCurrentUser(u);
  }
  const [active, setActive]=useState("App");
  function handleActive(s){
    setCurrentUser(auth.currentUser);
      setActive(s);

  }
 return<>
 <Navbar handleActive={handleActive}/>
 <div className='main'>
 {active=="App"&&<section className='main-section'>
    <h1 className='big-text'>X-Note a Better Notes and Password Manager</h1>
    <h4 className='small-text'>With x note you can manage your daily notes and generate hard passwords and save it for future</h4>
    <button className="button button-white" onClick={()=>handleActive("Signup")}>Sign up</button>
    <button className="button" onClick={()=>handleActive("Signin")}>Sign in</button>
    </section>}
 </div>
 {active=="Signup"&&<Signup handleActive={handleActive} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
 {active=="Signin"&&<Signin handleActive={handleActive} msetCurrentUser={msetCurrentUser}/>}
 {active=="UserProfile"&&<UserProfile currentUser={currentUser}/>}
 {active=="CreateNote"&&<CreateNote currentUser={currentUser}/>}
 {active=="NoteList"&&<NoteList currentUser={currentUser}/>}
 
 </>
}


export default App
