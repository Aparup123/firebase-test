import { signOut } from "firebase/auth";
import { auth } from "./firebase";
export default function UserProfile({currentUser}){
    // console.log(currentUser.email);
    function userSignout(){
        signOut(auth).then(()=>{
            console.log("Successfully signed out");
        }).catch((e)=>{
            console.log(e);
        });
    }
    return <>
        <h1>Hello</h1>
       { currentUser==null?"":<h2>{currentUser.email}</h2>}
        <button onClick={userSignout}>Sign out</button>
    </>
}