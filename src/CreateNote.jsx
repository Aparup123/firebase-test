import { db } from "./firebase"
import { addDoc, collection } from "firebase/firestore"
export default function CreateNote({currentUser}){
    function saveNote(){
        const collectionRef=collection(db, `users/${currentUser.email}/notes`);
        addDoc(collectionRef,{
            heading:"Hello",
            content:"I am da huge"
        }).then(()=>{
            console.log("Notes saved successfully");
        }).catch((e)=>{
            console.log(e);
        });
    }
    return <>
    <br/>
        <button onClick={saveNote}>save</button>
    </>
}