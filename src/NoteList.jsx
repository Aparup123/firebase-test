import { useEffect, useState } from 'react';
import {db} from './firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'
export default function NoteList({currentUser}){
    const [notes, setNotes]=useState([]);
    useEffect(()=>{
        const collectionRef=collection(db, `users/${currentUser.email}/notes`);
        getDocs(collectionRef).then((querySnapshot)=>{
            var temp=[]
            querySnapshot.forEach((element) => {
                console.log(element.id," => ",element.data());
                temp.push({id:element.id,
                    data:element.data()});
                
            });
            setNotes(temp);
        }).catch((e)=>console.log(e));
        
    },[]);

    
        
   
    return<>
        <br/>
        {/* <button onClick={fetchNotes}>fetch notes</button> */}
        <div>
            {notes.map((item)=>{
                console.log(item.id);
                return <pre key={item.id} id={item.id}>{item.data.content}</pre>})}
        </div>
    </>
}