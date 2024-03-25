import { db } from "./firebase"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
export default function CreateNote({currentUser, setActive}){
    const [noteHeading, setNoteHeading]=useState("");
    const [noteContent, setNoteContent]=useState("");
    function saveNote(e){
        e.preventDefault();
        const collectionRef=collection(db, `users/${currentUser.email}/notes`);
        addDoc(collectionRef,{
            heading:noteHeading,
            content:noteContent
        }).then(()=>{
            console.log("Notes saved successfully");
            setActive("NoteList")
        }).catch((e)=>{
            console.log(e);
        });
    }
    return <>
        <div className="create-note-main">
            <form className="create-note-form" onSubmit={saveNote}>
                <div className="create-note-header">
                <input placeholder="heading" className="create-note-heading" value={noteHeading} onChange={e=>setNoteHeading(e.target.value)}></input>
                {/* <button type="submit/" className="button-white">save</button>*/}
                 <button className="create-note-save-icon" type="submit"><FiCheckCircle/></button>
                </div>  
              
                <hr/>
                <textarea placeholder="Note" className="create-note-content" value={noteContent} onChange={e=>setNoteContent(e.target.value)}></textarea>
                
            </form>
        </div>
        
    </>
}