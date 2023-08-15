import React, { useEffect, useState } from "react";

const List = () => {
    const [newTask, setNewTask] = useState ("Get MERN balck belt");
    const [isReady, setIsReady] = useState (false);
    const [tasks, setTasks] = useState ([]);

    //Deberia guardar para cuando uno recarga la pestaña quede todo igual pero no funciona
    useEffect(() => {
        sessionStorage.setItem("tasks",JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() =>{
        const saveTasks = sessionStorage.getItem(tasks)
        if (saveTasks){
            setTasks(parseInt(saveTasks));
        }
    }, []);


    const addTask = () => {
        const task = {
            id: Math.floor(Math.random() * 1000),
            value: newTask
        };
        if (newTask == ""){
            alert ("Add a task");
        }else{
            setTasks(prevList => [...prevList, task]);
            setNewTask ("");
        }
    }


    const deleteTask = (id) =>{
        const newArray = tasks.filter(task => task.id !== id);
        setTasks(newArray);
    }




    return (
        <div>
            <h1>To Do List</h1>
            <div>
                <input className="add" type="text" placeholder="Add a task" value={newTask} onChange={e => setNewTask(e.target.value)}/>
                <button className="add-button" onClick={() => addTask()}>Add</button> 
            </div>
            
            <ul id="list">
                {tasks.map(task => {
                    return(
                        <li key={task.id}>
                            <span style={ isReady ? {textDecoration: "line-through"}:null}>{task.value}</span> 
                            <input  className="checkbox" type="checkbox" checked={isReady.id} onChange={e => setIsReady(e.target.checked)}/>
                            <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                        //Aun la linea se cambia en todos los elementos de la lista
                    )
                })}
            </ul>
            
            
        </div>
    );

}

export default List;