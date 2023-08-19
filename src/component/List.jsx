const List = (props) => {
    const {list, setList} = props;

    const deleteTask = (index) => {
        const newList = list.filter((_task, indexFilter) => { // "_" que se va a ignorar
            return indexFilter !== index; //Si son iguales los elimina pero si son diferentes los deja pasar
        });
        setList(newList);
    }

    const taskStatus = (index) => {
        const updateList = list.map((task, mapIndex) => {
            if( index === mapIndex ){
                task.status = !task.status
            }
            return task;
        });
        setList(updateList);
    }

    return(
        <div>
            {list.map((task, index) => 
                <div key={index}>
                    <input type="checkbox" onChange={() => taskStatus(index)} checked={task.status}></input>
                    <span className="newTask" style={{ textDecorationLine: task.status ? "line-through" : "" }} >{task.title}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default List;