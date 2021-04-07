import React, {Component} from "react";

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {itemtxt: ""};
    }
    EnterFunction(e){
        if(e.key==='Enter'){
            this.setState({itemtxt: e.target.value})
            e.target.value="";
        }   
    }
    render() {
        return(
            <>
                <input className="todo-app__input" placeholder={this.props.text} onKeyPress={this.EnterFunction.bind(this)}></input>
                <ul className="todo-app__list" id="todo-list">
                    <li className="todo-app__item">{this.state.itemtxt}</li>
                </ul>
            </>
        )
    }
}
/*
class List extends Component {
    render(){
        return(

        )
    }
}
*/
export default Input;