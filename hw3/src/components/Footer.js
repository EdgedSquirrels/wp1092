import { Component } from 'react';


class Footer extends Component {



  render() {
    return (
        <footer className="todo-app__footer" style={{display : this.props.display}}>
            <div className="todo-app__total">{this.props.left} left</div>
            <ul className="todo-app__view-buttons">
                <button >All</button>
                <button >Active</button>
                <button >Completed</button>
            </ul>
            <div className="todo-app__clean"><button >Clear complted</button></div>
        </footer>
    )
  }
}
export default  Footer;