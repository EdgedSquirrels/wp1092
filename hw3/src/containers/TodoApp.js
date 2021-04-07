import React, { Component } from "react";
import Header from "../components/Header";
import Body from "../components/Body";

class TodoApp extends Component {
    render() {
        return (
            <>
                <Header text="todos"/>
                <Body/>
            </>
        );
    }
}

export default TodoApp;



/*
                    <ul className="todo-app__list" id="todo-list">
                        <li className="todo-app__item">
                            <div className="todo-app__checkbox">
                                <input id="2"></input>
                                <label for="2"></label>
                            </div>
                        </li>
                    </ul>


                    <footer className="todo-app__footer" id="todo-footer">
                    <div className="todo-app__total">

                    </div>

                    <ul className="todo-app__view-buttons">
                        <h1 className="todo-app__item-detail">
                            This is the third TODO
                        </h1>
                    </ul>

                    <div className="todo-app__clean">

                    </div>
                </footer>

*/