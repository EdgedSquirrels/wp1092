import React from 'react'

function TaskInput({newTask, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="todo-app__input"
                name="title"
                placeholder="What needs to be done?"
                value={newTask.title || ""}
                onChange={handleChange}
            />
        </form>
    )
}

export default TaskInput
