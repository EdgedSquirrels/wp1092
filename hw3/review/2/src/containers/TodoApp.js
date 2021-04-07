import React, { Component } from "react";
import Header from "../components/Header";
import Input from "../components/Input";

class TodoApp extends Component {
    /*constructor(props){
        super(props);
        this.state = {MyItem:""}
    }
    Visibility(e){
        let feature="";
        if(e!="") feature="visible";
        else feature="hidden";
        return feature;
    }*/
    render() {
        return (
            <>
                <Header text="todos" />
                <section className="todo-app__main">
                    <Input text="What needs to be done?"/>
                </section>
                <footer className="todo-app__footer">

                </footer>
            </>
        );
    }
}

export default TodoApp;
