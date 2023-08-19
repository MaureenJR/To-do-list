import { useState } from "react";

const Form = (props) => {
    //Desestructurar props
    const { list, setList } = props;

    //Pripiedades de la tarea
    const [ title, setTitel ] = useState("");
    const [ status, setStatus ] = useState (false);

    //Metodo para añadir tarea
    const addTask = (e) => {
        e.preventDefault ();
        //Si no hay nada escrito
        if(title.length === 0){
            return;
        } 
        const newTask = {
            title, status
        }
        setList([...list, newTask]);
        setTitel("");
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <label className="task">New Task:</label>
                <input type="text" placeholder="Add a task" className="add" onChange={e => setTitel(e.target.value)} value={title}/>
                <input type="submit" className="add-button" value={"Add"}/>
            </form>
        </div>
    );
}

export default Form;

