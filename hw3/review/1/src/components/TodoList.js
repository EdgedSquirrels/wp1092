import React from 'react'

function TodoList({allTasks, handleDelete, handleStrike}) {

    // const[clsName, setClsName] = useState("todo-app__item-detail");
    
    
    return (
        <ul style={{listStyleType:"none"}} className="todo-app__list" id="todo-list">
            {allTasks.map((target, index) => (
                <li className={"todo-app__item" + (target.showOrNot ? "" : "-display-none")}>
                    <div className="todo-app__checkbox">
                        <input id={index} type="checkbox" onClick={handleStrike} checked={target.done} />
                        <label htmlFor={index}></label>
                        
                    </div>
                    <h1 id={index} className={!target.done ? "todo-app__item-detail" : "todo-app__item-detail-strike"} checked={target.done}>{target.title}</h1>
                    <img src="img/x.png" alt="DeleteImg" className="todo-app__item-x" onClick={() => handleDelete(index)} />
                    {console.log(allTasks)}    
                </li>
                
            )
            )}
        </ul>
    )
}

export default TodoList
