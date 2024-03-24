import { useEffect, useState } from 'react';
import {auth, db} from './firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'
export default function NoteList({currentUser}){
    console.log(currentUser);
    currentUser=auth.currentUser;
    const [notes, setNotes]=useState([]);
    
    useEffect(()=>{
        if(currentUser!=null){
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
        }
        
        
    },[currentUser]);

    
        
   
    return<>
       
        {/* <button onClick={fetchNotes}>fetch notes</button> */}
        <div className='center'>
        <div className='note-section'>
            {notes.map((item)=>{
                console.log(item.id);
                return <div className='note-box' key={item.id} id={item.id}>
                <h3 className='note-heading'>{item.data.heading}</h3>
                <p className='note-content'>{item.data.content}</p>
            </div>               
                {/* <pre key={item.id} id={item.id}>{item.data.content}</pre> */}
                })}

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>

            <div className='note-box'>
                <h3 className='note-heading'>Heading</h3>
                <p className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae imperdiet purus. Donec odio felis, sagittis id urna sollicitudin, aliquam rhoncus justo. Nulla non tincidunt nulla. Vivamus dictum nisl eu nunc maximus, eu laoreet elit sollicitudin. Donec commodo sodales lectus, sagittis porttitor enim suscipit et. Pellentesque scelerisque ipsum in ornare tincidunt. Donec vitae ipsum diam. Ut eget elit id eros pellentesque tempor.

Morbi tristique, sapien a lacinia aliquam, lorem diam lobortis elit, vel dictum erat quam nec velit. Quisque ultrices sollicitudin lorem eget laoreet. Vivamus ultricies ipsum et nibh bibendum imperdiet. Phasellus luctus dui sapien. Donec et aliquam tortor. Nunc euismod turpis velit, nec vestibulum sem dictum faucibus. Nam eu ligula fermentum dui laoreet fermentum. Quisque nec congue velit. Donec ultrices facilisis est. Quisque pharetra pellentesque magna, et finibus sapien varius a.</p>
            </div>
        </div>
        </div>
    </>
}


