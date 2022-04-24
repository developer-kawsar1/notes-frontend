import React, { useState } from 'react';
import './App.css';
import axios from 'axios'


function App() {  
  const [notesList,setNotes]=useState<Array<any>>([])
  //  let notesList :any[]=[]
  const getNotes= async ()=>{
    // console.log("we are awesome ") 
    try{
      const response=await axios.get(
        'http://localhost:5000/notes'
      )  
      setNotes(response.data.notes)
      console.log(notesList);
      
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div className="App">
       <div>Notes  Applications </div>
       <div>
         <button onClick={getNotes} >Click me !</button> 
         <div>
          
          {
            // show details for first element  
            
          }
          <h4>{notesList[0]?.text}</h4>
          <h4>{notesList[0]?.link}</h4>
         </div>
       </div>
    
    </div>
  );
}

export default App;
