import React from 'react'

function Footer(props) {
    return (
        <div className={props.currentExitItem ? "todo-app__footer" : "todo-app__footer-hide"} id="todo-app__item-detail">
            <div className="todo-app__total">{props.currentItemNumLeft} left</div>
            <ul className="todo-app__view-buttons">
                <button onClick={props.handleShowAll}>All</button>
                <button onClick={props.handleActive}>Active</button>
                <button onClick={props.handleCompleted}>Completed</button>
            </ul>
            <div >
                <button className={(props.currentExitItem - props.currentItemNumLeft) ? "todo-app__clean" : "todo-app__clean-hidden"} onClick={props.handleClear}>Clear completed</button>
            </div>
        </div>
    )
}

export default Footer
