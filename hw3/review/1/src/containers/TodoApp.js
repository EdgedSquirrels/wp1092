import React, { useState } from "react";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput"
import TodoList from "../components/TodoList"
import Footer from "../components/Footer"

function TodoApp() {
    // const [newWhole, setNewWhole] = useState("");
    // const [allWhole, setAllWhole] = useState("");

    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
        const{ name, value } = target;
        setNewTask((prev) => ({...prev, id:Date.now(), [name]:value, done:false, showOrNot:true}));
    }

    const [currentItemNumLeft, setCurrentItemNumLeft] = useState(0);

    // const [savedAllTasks, setSavedAllTasks] = useState([]); 

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(!newTask.title) return;
        setAllTasks((prev) => [...prev, newTask]);
        setNewTask({});
        setCurrentItemNumLeft(currentItemNumLeft + 1)
        // handleSavedAllTasks();
    }

    // const handleSavedAllTasks = () => {
    //     setSavedAllTasks((prev) => [...prev, newTask]);
    // }
    

    const handleDelete = (taskIdToRemove) => {
        // const newT =[...allTasks];
        // newT.splice(taskIdToRemove, 0);
        // setNewTask(newT);
        
        setAllTasks(allTasks.filter((_, index) => index !== taskIdToRemove));
        if(allTasks[taskIdToRemove].done===false) setCurrentItemNumLeft(currentItemNumLeft - 1)
        

    }

    const handleClear = () => {
        // const newT =[...allTasks];
        // newT.splice(taskIdToRemove, 0);
        // setNewTask(newT);
         
        setAllTasks(allTasks.filter((todo, index) => 
            todo.done === false,
            // setCurrentItemNumLeft(currentItemNumLeft - 1)
            ));
        

    }

    const handleStrike = e => {
        setAllTasks(allTasks.map((todo, index) => {
            if(Number(e.target.id) !== index) return todo;
            if(todo.done===true) setCurrentItemNumLeft(currentItemNumLeft + 1)
            else setCurrentItemNumLeft(currentItemNumLeft - 1)
            return{
                ...todo,
                done: !todo.done
            }
        }));
    }

    const handleActive = () => {
        setAllTasks(allTasks.map((todo, index) => {
        if(todo.done === false) {
            return{
                ...todo,
                showOrNot: true
            }
        } 
        return{
            ...todo,
            showOrNot: false
        }
        }));
    }

    const handleCompleted = () => {
        setAllTasks(allTasks.map((todo, index) => {
            if(todo.done === false) {
                return{
                    ...todo,
                    showOrNot: false
                }
            } 
            return{
                ...todo,
                showOrNot: true
            }
            }));
    }

    const handleShowAll = () => {
        setAllTasks(allTasks.map((todo, index) => {
            return{
                ...todo,
                showOrNot: true
            }
        }));
    }

    return (
        <>
            <Header text="todos" />
            <section className="todo-app__main">
                <TaskInput 
                    newTask={newTask} 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <TodoList allTasks={allTasks} handleDelete={handleDelete} handleStrike={handleStrike}  />
            </section>
            <Footer currentItemNumLeft={currentItemNumLeft} currentExitItem={allTasks.length} handleActive={handleActive} handleCompleted={handleCompleted} handleShowAll={handleShowAll} handleClear={handleClear} />
            
        </>
    );
}

export default TodoApp;
