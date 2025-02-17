import React, { useState } from "react";

function ColorPicker(){
            
   const [tasks,setTask] =  useState(["Eat beackfast","Take a shower","Walk the dog"]);
   const [newTask,setNewTask] = useState("");

   function handleInputChange(event){
     setNewTask(event.target.value);
   }

   function addTask(){
      if(newTask.trim() !== ""){
         setTask(t => [...t, newTask]);
         setNewTask(""); 
      }

   }

   function deleteTask(index){
         const updatedTasks = tasks.filter((_,i) => i !== index);
         setTask(updatedTasks);
     }

   function moveTaskUp(index){
       if(index > 0){
          const updatedTasks = [...tasks];
          [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
          setTask(updatedTasks);
       }
   }

   function moveTaskDown(index){
     if(index > tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTask(updatedTasks);
     }
 }

return(<>
          <div>
                 <h2>To-Do-List</h2>
                 <input 
                 type="text" 
                 placeholder="Enter a task" 
                 value={newTask}
                 onChange={handleInputChange} />
                 <button className="add-btn" onClick={addTask}>   
                 Add
                 </button>
          </div>
          <ol>
               {tasks.map((task,index) => 
                  <li key={index}>
                         <span className="text">{task}</span>
                         <button className="delete-btn" onClick={() => deleteTask(index)}>
                                   Delete
                         </button>
                        
                         <button className="move-btn" onClick={() => moveTaskUp(index)}>
                                  Up
                         </button>

                         <button className="move-btn" onClick={() => moveTaskDown(index)}>
                                  Down
                         </button>
                  </li>)}
          </ol>
      </>);

};
export default ColorPicker