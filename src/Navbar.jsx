import { CiMenuFries } from "react-icons/ci";
export default function Navbar({handleActive}){
    return <>
        <div className="navbar">
            <div className="nav-logo">
                <p>X-Note</p>
            </div>
            <ul className="nav-list">
            <li onClick={()=>handleActive("Signup")}>Sign up</li>
            <li onClick={()=>handleActive("Signin")}>Sign in</li>
            <li onClick={()=>handleActive("UserProfile")}>Profile</li>
            {/* <li onClick={()=>handleActive("CreateNote")}>CreateNote</li> */}
            <li onClick={()=>handleActive("NoteList")}>Notes</li>
            <span className="menu-icon"><CiMenuFries/></span>
            </ul>
        </div>
    </>
}