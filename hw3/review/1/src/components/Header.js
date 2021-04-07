import React from "react";
export default function Header({text}){
    return(
        <header className="todo-app__header">
            <h1 className="todo-app__title">{text}</h1>
        </header>
    )
} 
