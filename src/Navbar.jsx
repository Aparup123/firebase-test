import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
export default function Navbar({handleActive}){
    const [menuActive, setMenuActive]=useState(true);
    function handleMenuActive(){
        setMenuActive(!menuActive);
    }
    return <>
        <div className="navbar">
            <div className="nav-logo">
                <p>X-Note</p>
            </div>
            <ul className={menuActive?"nav-list":"nav-list active"}>
            <li onClick={()=>{handleActive("Signup"); handleMenuActive();}}>Sign up</li>
            <li onClick={()=>{handleActive("Signin"); handleMenuActive();}}>Sign in</li>
            <li onClick={()=>{handleActive("UserProfile"); handleMenuActive();}}>Profile</li>
            {/* <li onClick={()=>handleActive("CreateNote")}>CreateNote</li> */}
            <li onClick={()=>{handleActive("NoteList"); handleMenuActive();}}>Notes</li>
            
            </ul>
            <span className="menu-icon" onClick={handleMenuActive}><CiMenuFries/></span>
        </div>
    </>
}