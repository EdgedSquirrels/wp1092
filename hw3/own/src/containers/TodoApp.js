import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.additem = this.additem.bind(this);
        this.ckeckbox = this.ckeckbox.bind(this);
        this.deleteitem = this.deleteitem.bind(this);
        this.state = {
            items: []}
        this.id = 0;
        this.left = 0;
      }
    

    additem(e) {
        if(e.key==='Enter'){
            let detail = e.target.value.trim();
            this.setState((state)=>({
                items: [
                  ...state.items,
                  {todo: detail, completed:false, id : ++this.id }
                ]}));
            e.target.value="";
            this.left++;
        }
    }

    ckeckbox(id){
        this.state.items.forEach((item)=>{if(item.id.toString()===id){
            if(item.completed){
                this.left++;
            }else{
                this.left--;
            }
            item.completed=!item.completed}});
        this.setState((state)=>({items : state.items,}));
    }
    deleteitem(id,iscompleted){
        if(!iscompleted){
            this.left--;
        }
        this.setState((state)=>({
            items : state.items.filter(item => item.id !== id)
          }))
    }
      
    render() {
        let items = this.state.items;
        return (
            <>
                {Header("todos")}
                <section className="todo-app__main">
                    <input type="text" className="todo-app__input" placeholder="What needs to be done?" onKeyDown={(e)=>{this.additem(e)}}/>
                    <ul className="todo-app__list" id="todo-list">
                        {items.map((item)=>{return(      
                        <li key={item.id} className="todo-app__item" >

                            <div className="todo-app__checkbox">
                                <input id={item.id} type='checkbox' onClick={(e)=>{this.ckeckbox(e.target.id)}}/><label htmlFor={item.id}></label>
                            </div>

                            {!item.completed?<h1 className="todo-app__item-detail">{item.todo}</h1>
                            :<h1 className="todo-app__item-detail" style={{textDecoration: 'line-through', opacity: '0.5'}}>{item.todo}</h1>}

                            <img src="./img/x.png" className="todo-app__item-x" alt="icon" onClick={()=>{this.deleteitem(item.id,item.completed)}}/>

                        </li>);})
                        }
                    </ul>
                </section>
                        {this.state.items.length>0?<Footer left={this.left} display={'flex'}/>:<Footer display={'none'}/>}
            </>
        );
    }
}

export default TodoApp;
